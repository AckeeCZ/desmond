// River function -- other functions in composition flow: one input, one output
type RiverFn<T, TRes> = ((p: T) => TRes | Promise<TRes>) | ((p: T[]) => TRes | Promise<TRes>);

// Shorthand for return type of pipe (only replace return value of Delta function)
// see https://stackoverflow.com/a/50014868
type ArgumentTypes<T> = T extends (...args: infer U) => infer R ? U : never;
type ReplaceReturnTypePromise<T, TNewReturn> = (...a: ArgumentTypes<T>) => Promise<TNewReturn>;
type VariadicFunction = (...args: any[]) => any;
// Pipe (0-5 functions, first Delta)
function pipe<T>(): (arg: T) => Promise<T>;
function pipe<Delta extends VariadicFunction>(df: Delta): Delta;
function pipe<Delta extends VariadicFunction, R1>(df: Delta, r1: RiverFn<ReturnType<Delta>, R1>):
    ReplaceReturnTypePromise<Delta, R1>;
function pipe<Delta extends VariadicFunction, R1, R2>(df: Delta, r1: RiverFn<ReturnType<Delta>, R1>, r2: RiverFn<R1, R2>):
    ReplaceReturnTypePromise<Delta, R2>;
function pipe<Delta extends VariadicFunction, R1, R2, R3>(df: Delta, r1: RiverFn<ReturnType<Delta>, R1>, r2: RiverFn<R1, R2>, r3: RiverFn<R2, R3>):
    ReplaceReturnTypePromise<Delta, R3>;
function pipe<Delta extends VariadicFunction, R1, R2, R3, R4>(
    df: Delta,
    r1: RiverFn<ReturnType<Delta>, R1>,
    r2: RiverFn<R1, R2>,
    r3: RiverFn<R2, R3>,
    r4: RiverFn<R3, R4>
): ReplaceReturnTypePromise<Delta, R4>;
function pipe<Delta extends VariadicFunction, R1, R2, R3, R4, R5>(
    df: Delta,
    r1: RiverFn<ReturnType<Delta>, R1>,
    r2: RiverFn<R1, R2>,
    r3: RiverFn<R2, R3>,
    r4: RiverFn<R3, R4>,
    r5: RiverFn<R4, R5>
): ReplaceReturnTypePromise<Delta, R5>;
function pipe<Delta extends VariadicFunction, Res>(df: Delta, ...fns: any[]):
    ReplaceReturnTypePromise<Delta, any>;

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
        fns.reduce((pendingLastResult, fn, i) => pendingLastResult.then((lastResult: any) => {
            // first iteration (lastResult is initialArgs), spread into delta function
            const currentResult = i === 0 ? fn(...lastResult) : fn(lastResult);
            return Array.isArray(currentResult) ? Promise.all(currentResult) : currentResult;
        }), Promise.all(initialArgs));
}

export default pipe;
