import promisify, { Callback } from 'lib/promisify';

const cbSimple = (ret: number, cb: Callback<number>) => cb(null, ret);
const cbElab = (a: any, err: string, ret: string, fail: boolean, cb: Callback<string>) =>
    fail ? cb(err) : cb(null, ret);

describe('promisify', () => {
    test('One param resolve', async () => {
        const n = 42;
        await expect(promisify(cbSimple)(n)).resolves.toBe(n);
    });
    test('Multiple param resolve', async () => {
        const ret = 'bazBarBax';
        await expect(promisify(cbElab)(null, 'err', ret, false)).resolves.toBe(ret);
    });
    test('Multiple param resolve', async () => {
        const err = 'bazBarBax';
        await expect(promisify(cbElab)(null, err, 'ret', true)).rejects.toBe(err);
    });
});
