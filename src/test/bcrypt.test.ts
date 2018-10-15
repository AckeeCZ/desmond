import compareBcrpyt from 'lib/compareBcrypt';
import hashBcrypt from 'lib/hashBcrypt';

describe('bcrypt', () => {
    test('Generates a string', () => {
        hashBcrypt('foo').then(res => {
            expect(typeof res).toBe('string');
        });
    });
    test('Successful compare', async () => {
        const data = 'Two tiny timid toads trying to trot to Tarrytown.';
        const hashed = await hashBcrypt(data);
        await expect(compareBcrpyt(data, hashed)).resolves.toBe(true);
        await expect(compareBcrpyt(hashed, 'foo')).resolves.toBe(false);
    });
});
