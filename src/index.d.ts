type Nullable<T> = T | null;

interface Model {
    [key: string]: any;
    toJSON?: (options?: any) => any;
}

type Transaction = any;
type TransactionFunction = (t: Transaction) => any;

interface KnexTable {
    columnInfo: () => Promise<object>
}

interface Knex {
    transaction: (fn: TransactionFunction) => any;
    (table: string): KnexTable;
}