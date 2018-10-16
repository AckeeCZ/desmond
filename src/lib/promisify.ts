export type Callback<T> = (e: any, res?: T) => void;

function promisify<TRes>(fn: (cb: Callback<TRes>) => any): () => Promise<TRes>;
function promisify<T1, TRes>(fn: (p1: T1, cb: Callback<TRes>) => any): (a1: T1) => Promise<TRes>;
function promisify<T1, T2, TRes>(fn: (p1: T1, p2: T2, cb: Callback<TRes>) => any): (a1: T1, a2: T2) => Promise<TRes>;
function promisify<T1, T2, T3, TRes>(fn: (p1: T1, p2: T2, p3: T3, cb: Callback<TRes>) => any): (a1: T1, a2: T2, a3: T3) => Promise<TRes>;
function promisify<T1, T2, T3, T4, TRes>(fn: (p1: T1, p2: T2, p3: T3, p4: T4, cb: Callback<TRes>) => any): (a1: T1, a2: T2, a3: T3, a4: T4) => Promise<TRes>;

/**
 * Promisify a callback function
 */
function promisify(func: any) {
  return (...args: any[]) =>
    new Promise((resolve, reject) => {
      const cb: Callback<any> = (err, result) => err ? reject(err) : resolve(result);
      func.apply(null, [...args, cb]);
    });
}

export default promisify;
