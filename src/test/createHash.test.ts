import { HexBase64Latin1Encoding } from 'crypto';
import createHash from 'lib/createHash';

describe('createHash', () => {
    describe('Basic behavior', () => {
        const data = 'foo';
        test('Returns a string', () => {
            expect(typeof createHash(data)).toBe('string');
        });
        test('Returns null on null', () => {
            expect(createHash(null as any as string)).toBe(null);
        });
        test('Throws error on non-existent hash', () => {
            const algo = 'ThisHashAlgoHopefullyDoesNotExist';
            expect(() => createHash(data, algo)).toThrow();
        });
        test('Returns buffer on null encoding', () => {
            expect(createHash(data, 'sha1', null as any as HexBase64Latin1Encoding)).toBeInstanceOf(Buffer);
        });
        test('Returns buffer on invalid encoding', () => {
            const encoding = 'NorThisDigestEncoding' as any as HexBase64Latin1Encoding;
            expect(createHash(data, 'sha1', encoding)).toBeInstanceOf(Buffer);
        });
    });
    describe('Algorithm (snapshot testing)', () => {
        const data = 'She sells sea shells on a sea shore.';
        test('Hash md5', () => {
            expect(createHash(data, 'md5')).toBe('4040f9f2d62a66e0bbcaf260c8ea1091');
        });
        test('Hash sha-1', () => {
            expect(createHash(data, 'sha1')).toBe('d3cbef0ce067fc118e7c079c319ab030371e7b68');
        });
    });
    describe('Digest (snapshot testing)', () => {
        const data = 'How much wood would a woodchuck chuck, if woodchuck could chuck wood?';
        const algo = 'md5';
        test('Digest hex', () => {
            expect(createHash(data, algo, 'hex')).toBe('a6893b6c94b9a6fa784675a9db777d6d');
        });
        test('Digest base64', () => {
            expect(createHash(data, algo, 'base64')).toBe('pok7bJS5pvp4RnWp23d9bQ==');
        });
        test('Digest latin1', () => {
            expect(createHash(data, algo, 'latin1')).toBe('¦;l¹¦úxFu©Ûw}m');
        });
    });
});
