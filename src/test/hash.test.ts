import hash from 'lib/hash';

describe('hash', () => {
    test('Returns a string', () => {
        expect(typeof hash('foo')).toBe('string');
    });
    describe('Algorithm (snapshot testing)', () => {
        const data = 'She sells sea shells on a sea shore.';
        test('Hash md5', () => {
            expect(hash(data, 'md5')).toBe('4040f9f2d62a66e0bbcaf260c8ea1091');
        });
        test('Hash sha-1', () => {
            expect(hash(data, 'sha1')).toBe('d3cbef0ce067fc118e7c079c319ab030371e7b68');
        });
    });
    describe('Digest (snapshot testing)', () => {
        const data = 'How much wood would a woodchuck chuck, if woodchuck could chuck wood?';
        const algo = 'md5';
        test('Digest hex', () => {
            expect(hash(data, algo, 'hex')).toBe('a6893b6c94b9a6fa784675a9db777d6d');
        });
        test('Digest base64', () => {
            expect(hash(data, algo, 'base64')).toBe('pok7bJS5pvp4RnWp23d9bQ==');
        });
        test('Digest latin1', () => {
            expect(hash(data, algo, 'latin1')).toBe('¦;l¹¦úxFu©Ûw}m');
        });
    })
});
