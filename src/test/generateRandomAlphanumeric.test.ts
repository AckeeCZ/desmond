import generateRandomAlphanumeric from 'lib/generateRandomAlphanumeric';

describe('randomAlfanumeric', () => {
    test('Zero length', () => {
        expect(generateRandomAlphanumeric(0)).toBe('');
    });
    test('Length matches', () => {
        Array(32).fill(null).forEach((_, i) => {
            expect(generateRandomAlphanumeric(i)).toHaveLength(i);
        });
    });
    test('Large alfanum contains only alfanum', () => {
        const n = 512;
        const longRand = generateRandomAlphanumeric(n);
        expect(longRand).toMatch(/^[a-z0-9]+$/i);
        expect(longRand).toHaveLength(n);
    });
});
