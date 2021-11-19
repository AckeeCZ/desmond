import { BinaryToTextEncoding, createHash } from 'crypto';

/**
 * Create a hash from input string
 * @param encoding digest encoding
 * @returns hash (default) or null (if no data provided)
 */
const hash = (data: string, algorithm: string = 'sha512', encoding: BinaryToTextEncoding = 'hex') =>
    data
        ? createHash(algorithm)
              .update(data)
              .digest(encoding)
        : null;

export default hash;
