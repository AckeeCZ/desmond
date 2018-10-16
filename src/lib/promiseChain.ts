/**
 * Run tasks sequentially, resolving the resulting promises and accumulating the result in an array
 * @param tasks Tasks to be executed
 * @returns array of resolved values
 */
const promiseChain = <T>(tasks: Array<(() => Promise<T>)>) =>
  tasks.reduce(
    (promise: Promise<T[]>, task: () => Promise<T>) =>
      promise.then(results => task().then(result => results.concat(result))),
      Promise.resolve([] as T[])
    );


export default promiseChain;
