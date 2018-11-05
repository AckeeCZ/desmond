function pipe(...fns: any[]) {
    return (...initialArgs: any) =>
        fns.reduce((lastResult, fn, i) => lastResult.then((res: any) => {
            const currentResult = fn(
                // The first function receives all the arguments passed to the composed function
                // The others just the one result from the previous one.
                ...(i ? [res] : res)
            );
            return Array.isArray(currentResult) ? Promise.all(currentResult) : currentResult;
        }), Promise.all(initialArgs));
}

export default pipe;
