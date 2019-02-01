/** @ignore */
export const isFunction = (fn: any) => typeof fn === 'function';

/** @ignore */
export const isString = (x: any) => typeof x === 'string';

/** @ignore */
export const isObject = (x: any) => typeof x === 'object' && Object.prototype.toString.call(x) === '[object Object]';
