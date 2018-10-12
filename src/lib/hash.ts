import { createHash } from 'crypto';

const hash = (data: string) => {
    const sha = createHash('sha512');
    sha.update(data);
    return sha.digest('hex');
};

export default hash;
