import { Knex, KnexTable, TransactionFunction } from 'lib/internal/types';

const table: KnexTable = {
    columnInfo: () => Promise.resolve({}),
};
const getTable = (name: string) => table;
const defaultAttributes = {
    transaction: (fn: TransactionFunction) => fn(null),
};
const createKnexMock = (attributes: { [k: string]: any }, knexFn = getTable): Knex =>
    Object.assign(knexFn, {
        ...defaultAttributes,
        ...attributes,
    });

export default createKnexMock;
