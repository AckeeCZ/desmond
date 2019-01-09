export type ArgTypes<T> = T extends (...args: infer A) => any ? A : never;
export type ArgType<F, Else = never> = F extends (arg: infer A) => any ? A : Else;
export type ReplaceReturnTypePromise<T, TNewReturn> = (...a: ArgTypes<T>) => Promise<TNewReturn>;
export type VariadicFunction = (...args: any[]) => any;
export type Lookup<T, K, Default = never> = K extends keyof T ? T[K] : Default;
export type Tail<T extends any[]> = ((...t: T) => void) extends ((x: any, ...u: infer U) => void) ? U : never;
export type Head<T extends any[]> = T extends [infer U, ...any[]] ? U : never;
export type UnpackPromise<T> = T extends Promise<Array<infer U>> ? U[] : T extends Promise<infer D> ? D : T;
export type LastIndexOf<T extends any[]> = ((...x: T) => void) extends ((y: any, ...z: infer U) => void)
    ? U['length']
    : never;
