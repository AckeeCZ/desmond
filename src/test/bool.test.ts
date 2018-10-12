import bool from 'lib/bool';

describe('bool', () => {
    describe('Basic behavior', () => {
        test('Numbers', () => {
            expect(bool(1)).toBe(true);
            expect(bool(0)).toBe(false);
            expect(bool(-1)).toBe(true);
            expect(bool(42)).toBe(true);
            expect(bool(Infinity)).toBe(true);
            expect(bool(-Infinity)).toBe(true);
            expect(bool(NaN)).toBe(false);
        });
    });
});
