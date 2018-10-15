import sqlColumnsListPromise from 'lib/sqlColumnsListPromise';
import createKnexMock from './mock/knex';

const knex = createKnexMock({}, name => ({
    columnInfo: () => Promise.resolve({
        [name]: true,
        foo_bar: true,
        bar_baz: true,
    }),
}));

describe('transacted', () => {
    test('Camelcases all columns', async () => {
        await expect(sqlColumnsListPromise(knex, 'some_name')).resolves.toEqual([
            'someName',
            'fooBar',
            'barBaz',
        ]);
    });
});
