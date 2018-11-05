import pipe from 'lib/pipe';

const always = (x: any) => () => x;
const alwaysP = (x: any) => () => Promise.resolve(x);
const alwaysConcat = (x: any) => (chain = []) => [...chain, x];
const alwaysConcatP = (x: any) => (chain = []) => Promise.resolve([...chain, x]);
const sumArr = (arr: number[]) => arr.reduce((a, b) => a + b, 0);
const sumVar = (...arr: number[]) => arr.reduce((a, b) => a + b, 0);
const multiply = (a: number) => (b: number) => a * b;

describe('pipe', () => {
    test('Returns value and is a promise', async () => {
        const answer = pipe(() => 42)();
        await expect(answer).toBeInstanceOf(Promise);
        await expect(answer).resolves.toBe(42);
    });
    test('Empty pipe returns arguments', async () => {
        await expect(pipe()(42)).resolves.toEqual([42]);
    });
    test('Handles mixed promises / values', async () => {
        const count = pipe(
            alwaysConcatP('ein'),
            alwaysConcat('zwo'),
            alwaysConcatP('drei'),
        );
        await expect(count()).resolves.toEqual(['ein', 'zwo', 'drei']);
    });
    test('Resolves values of array', async () => {
        const bratSum = pipe(
            always([
                Promise.resolve(7),
                14,
                21,
            ]),
            sumArr
        );
        await expect(bratSum()).resolves.toEqual(42);

    });
    test('First function accepts recieves multiple arguments', async () => {
        const deltaSum = pipe(
            sumVar,
            multiply(6)
        );
        const inverseDeltaSum = pipe(
            multiply(6),
            sumVar,
        );
        await expect(deltaSum(4, 3)).resolves.toEqual(42);
        await expect(inverseDeltaSum(4, 3)).resolves.toEqual(24);
    });
    test('Typings correct', async () => {
        const parseNumbers = (a: string, b: string) => [a, b].map(Number);
        const addTwo = (a: number, b: number) => a + b;
        const isLarge = (x: number) => x > 3;
        const process = pipe(parseNumbers, addTwo, isLarge);
        // const process = (a: string, b: string): boolean => pipe(parseNumbers, addTwo, isLarge);
        const res: boolean = process('5', '1');

        await expect(res).toBeTruthy;
    });
});
