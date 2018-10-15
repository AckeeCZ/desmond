interface Knex {
    transaction: (fn: (t: any) => any) => any;
}

type TransactionFunction = (t: any) => any;

interface KnexParams {
    transacting?: any;
}

const transacted = (knex: Knex, params: KnexParams) => {
    return (fn: TransactionFunction) => {
        if (params && params.transacting) {
            return fn(params.transacting);
        }
        return knex.transaction(t => fn(t));
    };
};

export default transacted;
