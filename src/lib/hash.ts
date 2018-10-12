import { createHash, HexBase64Latin1Encoding } from 'crypto';

const hash = (data: string, algorithm: string = 'sha512', encoding: HexBase64Latin1Encoding = 'hex') => {
    const sha = createHash(algorithm);
    sha.update(data);
    return sha.digest(encoding);
};

export default hash;
