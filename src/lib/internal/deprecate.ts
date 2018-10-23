const aliases: { [k: string]: string } = {
    _test: '_test',
    createHash: 'hash',
    fullUrlFromReq: 'absoluteUrl',
    nullOrToJSON: 'toJson',
    snakelize: 'snakelizeKeys',
    sqlColumnsListPromise: 'tableColumns',
    toBoolean: 'parseBool',
};

type wDeprecatedName<T> = T & { deprecatedName: string };

const report = (fn: (p: any) => any) => {
    const dfn = fn as wDeprecatedName<(p: any) => any>;
    const name = dfn.deprecatedName || dfn.name;
    const alias = aliases[name];
    const deprecation = `Backend toolback [deprecated]: "${name}" is deprecated and will be removed.`;
    const message = deprecation + (alias ? ` Use "${alias}" instead.` : '');
    // tslint:disable:no-console
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
