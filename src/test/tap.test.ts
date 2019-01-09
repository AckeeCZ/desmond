import tap from 'lib/tap';

let last: any;
const discardTee = (val: any) => {
    last = val;
    return null;
};
const discardTeeP = (val: any) =>
    Promise.resolve().then(() => {
        last = val;
        return null;
    });

describe('tap', () => {
    beforeEach(() => {
        last = undefined;
    });
    test('Taps return value', async () => {
        const value = 'foobar';
        await expect(Promise.resolve(value).then(tap(discardTee))).resolves.toEqual(value);
        expect(last).toEqual(value);
    });
    test('Taps return promise', async () => {
        const value = 'foobar';
        await expect(Promise.resolve(value).then(tap(discardTeeP))).resolves.toEqual(value);
        expect(last).toEqual(value);
    });
});
