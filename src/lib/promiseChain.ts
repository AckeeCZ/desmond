const promiseChain = <T>(funcs: Array<(() => Promise<T>)>) =>
  funcs.reduce(
    (promise: Promise<T[]>, func: () => Promise<T>) =>
      promise.then(results => func().then(result => results.concat(result))),
      Promise.resolve([] as T[])
    );


export default promiseChain;
