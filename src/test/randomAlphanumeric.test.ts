import randomAfanumeric from 'lib/randomAfanumeric';

describe('randomAlfanumeric', () => {
    test('Zero length', () => {
        expect(randomAfanumeric(0)).toBe('');
    });
    test('Length matches', () => {
        Array(32).fill(null).forEach((_,i) => {
            expect(randomAfanumeric(i)).toHaveLength(i);
        })
    });
    test('Large alfanum contains only alfanum', () => {
        const longRand = randomAfanumeric(512);
        expect(longRand).toMatch(/^[a-z0-9]+$/i)
        expect(longRand).toHaveLength(512);
    });
});
