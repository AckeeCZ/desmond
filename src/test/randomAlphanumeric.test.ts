import randomAfanumeric from 'lib/randomAfanumeric';

describe('randomAlfanumeric', () => {
    test('Zero length', () => {
        expect(randomAfanumeric(0)).toBe('');
    });
    test('Length matches', () => {
        Array(32).fill(null).forEach((_, i) => {
            expect(randomAfanumeric(i)).toHaveLength(i);
        });
    });
    test('Large alfanum contains only alfanum', () => {
        const n = 512;
        const longRand = randomAfanumeric(n);
        expect(longRand).toMatch(/^[a-z0-9]+$/i);
        expect(longRand).toHaveLength(n);
    });
});
