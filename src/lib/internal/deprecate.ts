const aliases: { [k: string]: string } = {
    fullUrlFromReq: 'absoluteUrl',
    nullOrToJSON: 'toJson',
    snakelize: 'snakelizeKeys',
    sqlColumnsListPromise: 'tableColumns',
    toBoolean: 'parseBool',
};

type wDepricatedName<T> = T & { depricatedName: string };

const report = (fn: (p: any) => any) => {
    const dfn = fn as wDepricatedName<(p: any) => any>;
    const name = dfn.depricatedName || dfn.name;
    const alias = aliases[name];
    const deprication = `Backend toolback [deprecated]: "${name}" is depricated and will be removed.`;
    const message = deprication + (alias ? ` Use "${alias}" instead.` : '');
    // tslint:disable-next-line
    console.warn(message);
};

function deprecate<TResult>(fn: () => TResult): () => TResult;
function deprecate<T1, TResult>(fn: (param1: T1) => TResult): (param1: T1) => TResult;
function deprecate<T1, T2, TResult>(fn: (param1: T1, param2: T2) => TResult): (param1: T1, param2: T2) => TResult;
function deprecate<T1, T2, T3, TResult>(fn: (param1: T1, param2: T2, param3: T3) => TResult): (param1: T1, param2: T2, param3: T3) => TResult;
function deprecate<T1, T2, T3, T4, TResult>(fn: (param1: T1, param2: T2, param3: T3, param4: T4) => TResult):
    (param1: T1, param2: T2, param3: T3, param4: T4) => TResult;
function deprecate<TParam, TResult>(fn: (...params: TParam[]) => TResult): (...params: TParam[]) => TResult {
    return (...params) => {
        report(fn);
        return fn(...params);
    };
}

export {
    deprecate
};
