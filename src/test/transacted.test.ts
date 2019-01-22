import * as Knex from 'knex';
import { isFunction } from 'lib/internal/validators';
import { transacted } from 'main';
import createKnexMock from './mock/createKnexMock';

let transactionsRan = 0;
const transaction = ('T0' as any) as Knex.Transaction;
let lastT: string | undefined;
const knex = createKnexMock({
    transaction: (fn: (t: Knex.Transaction) => any) => {
        transactionsRan += 1;
        fn(transaction);
    },
});
const saveT = (t: any) => (lastT = t);

describe('transacted', () => {
    beforeEach(() => {
        transactionsRan = 0;
        lastT = undefined;
    });
    test('Returns a function', () => {
        expect(isFunction(transacted(knex, {}))).toBe(true);
    });
    test('Repeated transaction created', () => {
        transacted(knex, {})(saveT);
        expect(lastT).toBe(transaction);

        transacted(knex, {})(saveT);
        expect(lastT).toBe(transaction);

        // 2 new transactions
        expect(transactionsRan).toBe(2);
    });
    test('Existing transaction reused', () => {
        const options = {
            transacting: ('T1' as any) as Knex.Transaction,
        };
        transacted(knex, options)(saveT);
        expect(lastT).toBe(options.transacting);

        transacted(knex, options)(saveT);
        expect(lastT).toBe(options.transacting);

        // no new transactions created
        expect(transactionsRan).toBe(0);
    });
});
