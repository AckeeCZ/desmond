import snakelize from 'lib/snakelizeKeys';

describe('snakelizeKeys', () => {
    test('Snakelize object keys', () => {
        const input = { fooBar: 1, camelCaseFtw: 'PleaseKeepThisUntouched' };
        expect(snakelize(input)).toEqual({ foo_bar: input.fooBar, camel_case_ftw: input.camelCaseFtw });
    });
    test('Snakelize keys of objects in an array', () => {
        const input = [
            { fooX: true },
            { barX: true },
            { bazX: true },
        ];
        expect(snakelize(input)).toEqual([
            { foo_x: true },
            { bar_x: true },
            { baz_x: true },
        ]);
    });
    test('Argument pureness', () => {
        const input = { fooBarQuizz: 123, baz: true };
        const inputParam = { ...input };
        snakelize(inputParam);
        expect(inputParam).toEqual(input);
    });
});
