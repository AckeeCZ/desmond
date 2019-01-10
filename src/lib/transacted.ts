import * as Knex from 'knex';

/**
 * Create a function with parameter `Transaction`.
 * `Transaction` is either passed on from `params.transacting`, or new transaction
 * is created using `knex.transaction`.
 */
const transacted = (knex: Knex, params?: { transacting?: Knex.Transaction }) => (fn: (t: Knex.Transaction) => any) => {
    if (params && params.transacting) {
        return fn(params.transacting);
    }
    return knex.transaction(t => fn(t));
};

export default transacted;
