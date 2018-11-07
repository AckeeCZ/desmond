import snakelize from 'lib/snakelize';

describe('snakelize', () => {
    test('Snakelize string', () => {
        expect(snakelize('heyHowYouDoing')).toEqual('hey_how_you_doing');
    });
    test('Snakelize composed string', () => {
        expect(snakelize('DoesAnybodyHere.Remember.VeraLynn')).toEqual('does_anybody_here.remember.vera_lynn');
    });
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
