import promiseChain from 'lib/promiseChain';

describe('promiseChain', () => {
    test('Promises', async () => {
        const results: number[] = [];

        const thenAdd = (x: number, wait: number) => {
            return new Promise(resolve => setTimeout(resolve, wait)).then(() => { results.push(x); return x; });
        };
        const tasks = [
            () => thenAdd(1, 500),
            () => thenAdd(2, 50),
            () => thenAdd(3, 0),
        ];
        await expect(promiseChain(tasks)).resolves.toEqual([1, 2, 3]);
        expect(results).toEqual([1, 2, 3]);
    });
});
