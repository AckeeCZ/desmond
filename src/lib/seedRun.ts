import camelCase from 'lodash.camelcase';
import { flatOmit, mapKeys, mapValues, toPairs } from './internal/utils';
import snakelize from './snakelize';

interface Selectors {
    [key: string]: (entity: any) => any;
}
interface DataPool {
    [entityName: string]: any[];
}
export interface SeedOptions {
    selectors: Selectors;
    timestampedCollections: string[];
}

const upsert = (knex: any, selectors: Selectors, entity: string, data: any) => {
    if (!selectors[entity]) {
        throw new Error(`Selector for entity \`${entity}\` is not defined`);
    }
    const select = () =>
        knex(snakelize(entity))
            .where(snakelize(selectors[entity](data)))
            .then((results: any) => results[0]);

    return select()
        .then(
            (found: any) =>
                (found &&
                    knex(snakelize(entity))
                        .where(snakelize(selectors[entity](data)))
                        .update(snakelize(flatOmit(data, ['createdAt'])))) ||
                knex(snakelize(entity)).insert(snakelize(data))
        )
        .then(select)
        .then((result: any) => mapKeys(result, key => camelCase(key)));
};

const resolveRefs = (dataPools: DataPool, data: any) => {
    return mapValues(data, value => {
        const refs = String(value).match(/\[([^\]]*)\]/);
        if (!refs) {
            return value;
        }
        const name = refs[1];
        const [refEntityName, refEntityIndex] = name.split('.');
        const refEntity = dataPools[refEntityName][Number(refEntityIndex)];
        if (!refEntity) {
            // throw new Error(`You referenced an entity \`${refEntityName}\` at index \`${refEntityIndex}\`, but it does not exist. Maybe invalid index?`);
            return value;
        }
        const refEntityProp = value.replace(/\[([^\]]*)\]\./, '');
        const newValue = refEntity[refEntityProp];
        return newValue;
    });
};

const seedRun = (knex: any, dataPools: DataPool, { selectors = {}, timestampedCollections = [] }: SeedOptions) => {
    return toPairs(dataPools)
        .reduce(
            (all, [entityName, data]) =>
                all.concat(data.map((entityRecord: any) => [entityName, entityRecord] as [string, any])),
            [] as Array<[string, any]>
        )
        .reduce((asyncResult: Promise<any>, [entityName, data]): Promise<any> => {
            return asyncResult
                .then(result => {
                    data = resolveRefs(result, data);
                    if (timestampedCollections.includes(entityName)) {
                        // @ts-ignore
                        data.createdAt = new Date();
                        // @ts-ignore
                        data.updatedAt = new Date();
                    }
                    return Promise.all([result, upsert(knex, selectors, entityName, data)]);
                })
                .then(([result, savedEntity]) => {
                    if (!result[entityName]) {
                        result[entityName] = [];
                    }
                    result[entityName].push(savedEntity);
                    return result;
                });
        }, Promise.resolve({})) as Promise<any>;
};
export default seedRun;
