import { pipe } from 'main';

const always = <T>(x: T) => () => x;
const alwaysConcat = <T>(x: T) => (chain: T[] = []) => [...chain, x];
const alwaysConcatP = <T>(x: T) => (chain: T[] = []) => Promise.resolve([...chain, x]);
const sumArr = <T>(arr: T[]) => arr.reduce((a: number, b: T) => a + Number(b), 0);
const sumVar = (...arr: number[]) => arr.reduce((a, b) => a + b, 0);
const multiply = (a: number) => (b: number) => a * b;

describe('pipe', () => {
    test('Returns value and is a promise', async() => {
        const answer = pipe(() => 42)();
        await expect(answer).toBeInstanceOf(Promise);
        await expect(answer).resolves.toBe(42);
    });
    test('Empty pipe returns arguments', async() => {
        await expect(pipe()(42)).resolves.toEqual([42]);
    });
    test('Handles mixed promises / values', async() => {
        const count = pipe(
            alwaysConcatP('ein'),
            alwaysConcat('zwo'),
            alwaysConcatP('drei')
        );
        await expect(count()).resolves.toEqual(['ein', 'zwo', 'drei']);
    });
    test('Resolves values of array', async() => {
        const bratSum = pipe(
            always([Promise.resolve(7), 14, 21]),
            sumArr
        );
        await expect(bratSum()).resolves.toEqual(42);
    });
    test('First function accepts recieves multiple arguments', async() => {
        const deltaSum = pipe(
            sumVar,
            multiply(6)
        );
        const inverseDeltaSum = pipe(
            multiply(6),
            sumVar
        );
        await expect(deltaSum(4, 3)).resolves.toEqual(42);
        await expect(inverseDeltaSum(4)).resolves.toEqual(24);
    });
    test('Typings correct', async() => {
        const parseNumbers = (a: string, b: string): number[] => [Number(a), Number(b)];
        const addTwo = ([a, b]: number[]) => a + b;
        const isLarge = (x: number) => x > 3;
        const process: (a: string, b: string) => Promise<boolean> = pipe(
            parseNumbers,
            addTwo,
            isLarge
        );
        const res: boolean = await process('5', '1');

        expect(res).toEqual(true);
    });
    test('Typings take out-of-bounds list of functions', async() => {
        const longPipe = pipe(
            always(1),
            always(1),
            always(1),
            always(1),
            always(1),
            always(1),
            always(1),
            always(1),
            always(1),
            always(1),
            always(1),
            always(1)
        );
        await expect(longPipe()).resolves.toEqual(1);
    });
});
