/**
 * Promise side effect.
 * Inspired by common bluebird's `Promise#tap`
 */
const tap = <T>(handler: (param: T) => any) =>
  (value: T) => Promise.resolve(handler(value))
    .then(() => value);

export default tap;
