const pipe = (() => (...fns: any[]) => (...args: any) =>
    fns.reduce((lastResult, fn, i) => lastResult.then((res: any) => {
        const nextResult = fn(
            // The first function receives all the arguments passed to the composed function
            // The others just the one result from the previous one.
            ...(i ? [res] : res)
        );
        return Array.isArray(nextResult) ? Promise.all(nextResult) : nextResult;
    }), Promise.all(args))
)();

export default pipe;
