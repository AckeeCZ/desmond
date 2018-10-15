type Nullable<T> = T | null;

type Transaction = any;
type TransactionFunction = (t: Transaction) => any;

interface KnexTable {
    columnInfo: () => Promise<object>
}

interface Knex {
    transaction: (fn: TransactionFunction) => any;
    (table: string): KnexTable;
}