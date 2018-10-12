import hash from 'lib/hash';

describe('hash', () => {
    test('Returns a string', () => {
        expect(typeof hash('foo')).toBe('string');
    });
});
