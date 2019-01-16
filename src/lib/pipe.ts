import { UnpackPromise } from './internal/metaTypes';
type DeltaFn<ARG extends any[], R> = (...args: UnpackPromise<ARG>) => R | PromiseLike<R>;
type RiverFn<ARG, R> = (arg: UnpackPromise<ARG>) => R | PromiseLike<R>;
function pipe<A extends any[]>(): (...args: A) => UnpackPromise<A>;
function pipe<A extends any[], R1>(f1: DeltaFn<A, R1>): (...args: A) => Promise<R1>;
function pipe<A extends any[], R1, R2>(f1: DeltaFn<A, R1>, f2: RiverFn<R1, R2>): (...args: A) => Promise<R2>;
function pipe<A extends any[], R1, R2, R3>(
    f1: DeltaFn<A, R1>,
    f2: RiverFn<R1, R2>,
    f3: RiverFn<R2, R3>
): (...args: A) => Promise<R3>;
function pipe<A extends any[], R1, R2, R3, R4>(
    f1: DeltaFn<A, R1>,
    f2: RiverFn<R1, R2>,
    f3: RiverFn<R2, R3>,
    f4: RiverFn<R3, R4>
): (...args: A) => Promise<R4>;
function pipe<A extends any[], R1, R2, R3, R4, R5>(
    f1: DeltaFn<A, R1>,
    f2: RiverFn<R1, R2>,
    f3: RiverFn<R2, R3>,
    f4: RiverFn<R3, R4>,
    f5: RiverFn<R4, R5>
): (...args: A) => Promise<R5>;
function pipe<A extends any[], R1, R2, R3, R4, R5, R6>(
    f1: DeltaFn<A, R1>,
    f2: RiverFn<R1, R2>,
    f3: RiverFn<R2, R3>,
    f4: RiverFn<R3, R4>,
    f5: RiverFn<R4, R5>,
    f6: RiverFn<R5, R6>
): (...args: A) => Promise<R6>;
function pipe<A extends any[], R1, R2, R3, R4, R5, R6, R7>(
    f1: DeltaFn<A, R1>,
    f2: RiverFn<R1, R2>,
    f3: RiverFn<R2, R3>,
    f4: RiverFn<R3, R4>,
    f5: RiverFn<R4, R5>,
    f6: RiverFn<R5, R6>,
    f7: RiverFn<R6, R7>
): (...args: A) => Promise<R7>;
function pipe<A extends any[], R1, R2, R3, R4, R5, R6, R7, R8>(
    f1: DeltaFn<A, R1>,
    f2: RiverFn<R1, R2>,
    f3: RiverFn<R2, R3>,
    f4: RiverFn<R3, R4>,
    f5: RiverFn<R4, R5>,
    f6: RiverFn<R5, R6>,
    f7: RiverFn<R6, R7>,
    f8: RiverFn<R7, R8>
): (...args: A) => Promise<R8>;
function pipe<A extends any[], R1, R2, R3, R4, R5, R6, R7, R8, R9>(
    f1: DeltaFn<A, R1>,
    f2: RiverFn<R1, R2>,
    f3: RiverFn<R2, R3>,
    f4: RiverFn<R3, R4>,
    f5: RiverFn<R4, R5>,
    f6: RiverFn<R5, R6>,
    f7: RiverFn<R6, R7>,
    f8: RiverFn<R7, R8>,
    f9: RiverFn<R8, R9>
): (...args: A) => Promise<R9>;
function pipe<A extends any[], R1, R2, R3, R4, R5, R6, R7, R8, R9, R10>(
    f1: DeltaFn<A, R1>,
    f2: RiverFn<R1, R2>,
    f3: RiverFn<R2, R3>,
    f4: RiverFn<R3, R4>,
    f5: RiverFn<R4, R5>,
    f6: RiverFn<R5, R6>,
    f7: RiverFn<R6, R7>,
    f8: RiverFn<R7, R8>,
    f9: RiverFn<R8, R9>,
    f10: RiverFn<R9, R10>
): (...args: A) => Promise<R10>;
function pipe(deltaFn: DeltaFn<any, any>, ...riverFns: Array<RiverFn<any, any>>): (...args: any) => Promise<any>;

/**
 * Create a function composed of provided functions in left-to-right execution chain.
 * Resulting function arguments are identical to the arguments of the first function
 * and return value identical to the result value of the last function in the chain.
 * ```typescript
 * const myPipe = pipe(
 *     (x: string) => x + 'first ',
 *     (x: string) => x + 'second',
 * );
 * await myPipe('Called: ') // 'Called: first second'
 * ```
 * First function can have multiple arguments:
 * ```typescript
 * await pipe(
 *     (a: number, b: number) => a + b,
 *     String,
 * )(1, 2); // '3'
 * ```
 * In-between the steps, all result promises are resolved. If result is an array, elements are resolved via Promise.all
 * ```typescript
 * await pipe(
 *     // first function has 0 args, resulting pipe has 0 args
 *     // any function can return promise, next function receives value as arg
 *     () => Promise.resolve([1, 2, 5, 8])
 *     // returning array of promises
 *     // no need to wrap in promise resolved
 *     (ids: number[]) => ids.map(db.find),
 *     // resolved array of users ready in next function
 *     (users: User[]), => users.map(countUserRating),
 * )(); // userRating[]
 * ```
 * @return Function with signature of the first function (or no args if no functions provided) returning Promise of a result of last function
 */
function pipe(...fns: any[]): any {
    return (...initialArgs: any[]) =>
        fns.reduce(
            (pendingLastResult, fn, i) =>
                pendingLastResult.then((lastResult: any) => {
                    // first iteration (lastResult is initialArgs), spread into delta function
                    const currentResult = i === 0 ? fn(...lastResult) : fn(lastResult);
                    return Array.isArray(currentResult) ? Promise.all(currentResult) : currentResult;
                }),
            Promise.all(initialArgs)
        );
}

export default pipe;
