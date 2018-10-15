import createDateWithMinutesFromNow from 'lib/createDateWithMinutesFromNow';

describe('createDateWithMinutesFromNow', () => {
    Date.now = () => 0; // ms
    const minutes = 5;
    const ms = minutes * 60 * 1000;
    const createdDate = createDateWithMinutesFromNow(minutes);
    test('Returns a Date', () => {
        expect(createdDate instanceof Date).toBe(true);
    });
    test('Time is correct', () => {
        expect(createdDate.getTime()).toBe(ms);
    });
});
