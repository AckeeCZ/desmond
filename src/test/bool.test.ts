import bool from 'lib/bool';

describe('bool', () => {
    describe('Numbers', () => {
        test('Valid non-zero numbers return true', () => {
            expect(bool(1)).toBe(true);
            expect(bool(-1)).toBe(true);
            expect(bool(42)).toBe(true);
            expect(bool(Infinity)).toBe(true);
            expect(bool(-Infinity)).toBe(true);
        });
        test('Zero and NaN is false', () => {
            expect(bool(0)).toBe(false);
            expect(bool(NaN)).toBe(false);
        });
    });
    describe('Boolean', () => {
        test('false is false', () => {
            expect(bool(false)).toBe(false);
        });
        test('true is true', () => {
            expect(bool(true)).toBe(true);
        });
    });
    describe('Strings', () => {
        test('"false" is false', () => {
            expect(bool('false')).toBe(false);
        });
        test('"true" is true', () => {
            expect(bool('true')).toBe(true);
        });
        test('"1" is true', () => {
            expect(bool('1')).toBe(true);
        });
        test('"0" is false', () => {
            expect(bool('0')).toBe(false);
        });
        test('Other strings are true', () => {
            expect(bool('')).toBe(true);
            expect(bool('    ')).toBe(true);
            expect(bool('132')).toBe(true);
            expect(bool('foo')).toBe(true);
        });
    });
});
