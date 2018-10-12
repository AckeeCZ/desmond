import { compare, hash } from 'lib/bcrypt';

describe('bcrypt', () => {
    test('Generates a string', () => {
        hash('foo').then(res => {
            expect(typeof res).toBe('string');
        });
    });
    test('Successful compare', async () => {
        const data = 'Two tiny timid toads trying to trot to Tarrytown.';
        const hashed = await hash(data);
        expect(compare(hashed, data)).toBeTruthy;
        expect(compare(hashed, 'foo')).toBeFalsy;
    });
});
