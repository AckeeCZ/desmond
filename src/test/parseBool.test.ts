import { parseBool } from 'main';

describe('parseBool', () => {
    describe('Edge', () => {
        test('Null is false', () => {
            expect(parseBool(null)).toBe(false);
        });
    });
    describe('Numbers', () => {
        test('Valid non-zero numbers return true', () => {
            expect(parseBool(1)).toBe(true);
            expect(parseBool(-1)).toBe(true);
            expect(parseBool(42)).toBe(true);
            expect(parseBool(Infinity)).toBe(true);
            expect(parseBool(-Infinity)).toBe(true);
        });
        test('Zero and NaN is false', () => {
            expect(parseBool(0)).toBe(false);
            expect(parseBool(NaN)).toBe(false);
        });
    });
    describe('parseBoolean', () => {
        test('false is false', () => {
            expect(parseBool(false)).toBe(false);
        });
        test('true is true', () => {
            expect(parseBool(true)).toBe(true);
        });
    });
    describe('Strings', () => {
        test('"false" is false', () => {
            expect(parseBool('false')).toBe(false);
        });
        test('"true" is true', () => {
            expect(parseBool('true')).toBe(true);
        });
        test('"1" is true', () => {
            expect(parseBool('1')).toBe(true);
        });
        test('"0" is false', () => {
            expect(parseBool('0')).toBe(false);
        });
        test('Other strings are true', () => {
            expect(parseBool('')).toBe(true);
            expect(parseBool('    ')).toBe(true);
            expect(parseBool('132')).toBe(true);
            expect(parseBool('foo')).toBe(true);
        });
    });
});
