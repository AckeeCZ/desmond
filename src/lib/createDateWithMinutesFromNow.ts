/**
 * Create a date in given minutes future
 */
const createDateWithMinutesFromNow = (minutes: number) => {
    return (new Date(Date.now() + (minutes * 60 * 1000)));
};

export default createDateWithMinutesFromNow;
