import { tableColumns } from 'main';
import createKnexMock from './mock/createKnexMock';

const knex = createKnexMock({}, (name: string) => ({
    columnInfo: () =>
        Promise.resolve({
            [name]: true,
            bar_baz: true,
            foo_bar: true,
        }),
}));

describe('tableColumns', () => {
    test('Camelcases all columns', async() => {
        const got = tableColumns(knex, 'some_name').then((cols: any) => cols.sort());
        const expected = ['someName', 'fooBar', 'barBaz'].sort();
        await expect(got).resolves.toEqual(expected);
    });
});
