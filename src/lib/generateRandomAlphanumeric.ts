import { randomBytes } from 'crypto';

/**
 * Generate a random alphanumeric string of given length
 */
const generateRandomAlphanumeric = (num: number) => {
    return randomBytes(Math.ceil(num * (3 / 4)))
        .toString('base64')
        .slice(0, num)
        .replace(/\+/g, '0')
        .replace(/\//g, '0');
};

export default generateRandomAlphanumeric;
