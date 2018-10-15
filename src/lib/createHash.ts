import { createHash as createHashCrypto, HexBase64Latin1Encoding } from 'crypto';

/**
 * Create a has from input string
 * @param encoding digest encoding
 * @returns hash (default) or null (if no data provided)
 */
const createHash = (data: string, algorithm: string = 'sha512', encoding: HexBase64Latin1Encoding = 'hex') =>
    data ? createHashCrypto(algorithm).update(data).digest(encoding) : null;

export default createHash;
