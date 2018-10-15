import { isFunction } from 'lib/internal/validators';
import transacted from 'lib/transacted';

let transactionsRan = 0;
const transaction = 'T0';
let lastT: string | undefined;
const knex = {
    transaction: (fn: (t: any) => any) => {
        transactionsRan++;
        fn(transaction);
    },
};
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
            transacting: 'T1',
        };
        transacted(knex, options)(saveT);
        expect(lastT).toBe(options.transacting);

        transacted(knex, options)(saveT);
        expect(lastT).toBe(options.transacting);

        // no new transactions created
        expect(transactionsRan).toBe(0);
    });
});
