import tableColumns from 'lib/tableColumns';
import createKnexMock from './mock/knex';

const knex = createKnexMock({}, name => ({
    columnInfo: () => Promise.resolve({
        [name]: true,
        bar_baz: true,
        foo_bar: true,
    }),
}));

describe('tableColumns', () => {
    test('Camelcases all columns', async () => {
        await expect(tableColumns(knex, 'some_name')).resolves.toEqual([
            'someName',
            'fooBar',
            'barBaz',
        ]);
    });
});
