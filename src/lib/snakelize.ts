// @ts-ignore
import snakeCase from 'lodash.snakecase';

/**
 * @ignore
 */
const mapKeys = (obj: { [key: string]: any }, fn: (key: string) => string) => {
    return Object.keys(obj)
        .reduce((res: { [key: string]: any }, key) => {
            res[fn(key)] = obj[key];
            return res;
        }, {});
};

/**
 * Snakelize keys of given object(s). Only top level keys are transformed.
 * Keys are assumed to be camelCase.
 * @param input object(s) to transform
 */
const snakelize = (input: { [key: string]: any } | Array<{ [key: string]: any }>) => {
    return Array.isArray(input) ? input.map(o => mapKeys(o, snakeCase)) : mapKeys(input, snakeCase);
};

export default snakelize;
