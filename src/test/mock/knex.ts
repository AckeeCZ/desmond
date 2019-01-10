import * as Knex from 'knex';

const table: Knex.QueryBuilder = {
    columnInfo: () => Promise.resolve({}),
} as any;
const getTable = (name: string) => table;
const defaultAttributes = {
    transaction: (fn: (t: Knex.Transaction) => any) => fn(null as any),
};
const createKnexMock = (attributes: { [k: string]: any }, knexFn: any = getTable): any =>
    Object.assign(knexFn, {
        ...defaultAttributes,
        ...attributes,
    }) as Knex;

export default createKnexMock;
