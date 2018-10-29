export type Nullable<T> = T | null;

export interface Model {
    [key: string]: any;
    toJSON?: (options?: any) => any;
}

export type Transaction = any;
export type TransactionFunction = (t: Transaction) => any;

export interface KnexTable {
    columnInfo: () => Promise<object>;
}

export interface Knex {
    transaction: (fn: TransactionFunction) => any;
    (table: string): KnexTable;
}
