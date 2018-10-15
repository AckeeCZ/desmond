import { genSalt, hash } from 'bcrypt';

const hashBcrypt = (plain: string, saltRounds: number = 10): Promise<string> => genSalt(saltRounds)
    .then(salt => hash(plain, salt));

export default hashBcrypt;
