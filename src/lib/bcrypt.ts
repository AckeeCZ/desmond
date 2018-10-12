import {
    compare as bCompare,
    genSalt,
    hash as bHash
} from 'bcrypt';

const hash = (plain: string, saltRounds: number = 10): Promise<string> => genSalt(saltRounds)
    .then(salt => bHash(plain, salt));

const compare = (plain: string, hashed: string): Promise<boolean> => bCompare(plain, hashed);

export {
    compare,
    hash,
};
