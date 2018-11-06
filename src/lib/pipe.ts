// Delta function -- first in composition can have any number of inputs, single output
export type DeltaFn0<TRes> = () => TRes | Promise<TRes> | TRes[] | Promise<TRes[]>;
type DeltaFn1<T1, TRes> = (p1: T1) => TRes | Promise<TRes> | TRes[] | Promise<TRes[]>;
type DeltaFn2<T1, T2, TRes> = (p1: T1, p2: T2) => TRes | Promise<TRes> | TRes[] | Promise<TRes[]>;
type DeltaFn3<T1, T2, T3, TRes> = (p1: T1, p2: T2, p3: T3) => TRes | Promise<TRes> | TRes[] | Promise<TRes[]>;
type DeltaFn4<T1, T2, T3, T4, TRes> = (p1: T1, p2: T2, p3: T3, p4: T4) => TRes | Promise<TRes> | TRes[] | Promise<TRes[]>;
type DeltaFn5<T1, T2, T3, T4, T5, TRes> = (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5) => TRes | Promise<TRes> | TRes[] | Promise<TRes[]>;
export type DeltaFn<T1, T2, T3, T4, T5, TRes> =
    DeltaFn0<TRes>
    | DeltaFn1<T1, TRes>
    | DeltaFn2<T1, T2, TRes>
    | DeltaFn3<T1, T2, T3, TRes>
    | DeltaFn4<T1, T2, T3, T4, TRes>
    | DeltaFn5<T1, T2, T3, T4, T5, TRes>;

// River function -- other functions in composition flow: one input, one output
type RiverFn<T, TRes> = ((p: T) => TRes | Promise<TRes>) | ((p: T[]) => TRes | Promise<TRes>);

// Shorthand for return type of pipe (only replace return value of Delta function)
// see https://stackoverflow.com/a/50014868
type ArgumentTypes<T> = T extends (...args: infer U) => infer R ? U : never;
type ReplaceReturnTypePromise<T, TNewReturn> = (...a: ArgumentTypes<T>) => Promise<TNewReturn>;

// Pipe (0-5 functions, first Delta)
function pipe<T>(): (arg: T) => Promise<T>;
function pipe<D1, D2, D3, D4, D5, DRes>(df: DeltaFn<D1, D2, D3, D4, D5, DRes>):
    ReplaceReturnTypePromise<DeltaFn<D1, D2, D3, D4, D5, DRes>, DRes>;
function pipe<D1, D2, D3, D4, D5, DRes, R1>(df: DeltaFn<D1, D2, D3, D4, D5, DRes>, r1: RiverFn<DRes, R1>):
    ReplaceReturnTypePromise<DeltaFn<D1, D2, D3, D4, D5, DRes>, R1>;
function pipe<D1, D2, D3, D4, D5, DRes, R1, R2>(df: DeltaFn<D1, D2, D3, D4, D5, DRes>, r1: RiverFn<DRes, R1>, r2: RiverFn<R1, R2>):
    ReplaceReturnTypePromise<DeltaFn<D1, D2, D3, D4, D5, DRes>, R2>;
function pipe<D1, D2, D3, D4, D5, DRes, R1, R2, R3>(df: DeltaFn<D1, D2, D3, D4, D5, DRes>, r1: RiverFn<DRes, R1>, r2: RiverFn<R1, R2>, r3: RiverFn<R2, R3>):
    ReplaceReturnTypePromise<DeltaFn<D1, D2, D3, D4, D5, DRes>, R3>;
function pipe<D1, D2, D3, D4, D5, DRes, R1, R2, R3, R4>(
    df: DeltaFn<D1, D2, D3, D4, D5, DRes>,
    r1: RiverFn<DRes, R1>,
    r2: RiverFn<R1, R2>,
    r3: RiverFn<R2, R3>,
    r4: RiverFn<R3, R4>
): ReplaceReturnTypePromise<DeltaFn<D1, D2, D3, D4, D5, DRes>, R4>;
function pipe<D1, D2, D3, D4, D5, DRes, R1, R2, R3, R4, R5>(
    df: DeltaFn<D1, D2, D3, D4, D5, DRes>,
    r1: RiverFn<DRes, R1>,
    r2: RiverFn<R1, R2>,
    r3: RiverFn<R2, R3>,
    r4: RiverFn<R3, R4>,
    r5: RiverFn<R4, R5>
): ReplaceReturnTypePromise<DeltaFn<D1, D2, D3, D4, D5, DRes>, R5>;

function pipe(...fns: any[]): any {
    return (...initialArgs: any) =>
        fns.reduce((pendingLastResult, fn, i) => pendingLastResult.then((lastResult: any) => {
            const currentResult = fn(
                // The first function receives all the arguments passed to the composed function
                // The others just the one result from the previous one.
                ...(i ? [lastResult] : lastResult)
            );
            return Array.isArray(currentResult) ? Promise.all(currentResult) : currentResult;
        }), Promise.all(initialArgs));
}

export default pipe;
