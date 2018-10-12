import { createHash, HexBase64Latin1Encoding } from 'crypto';

const hash = (data: string, algorithm: string = 'sha512', encoding: HexBase64Latin1Encoding = 'hex') =>
    data ? createHash(algorithm).update(data).digest(encoding) : null;

export default hash;
