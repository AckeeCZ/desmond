import { compare } from 'bcrypt';

const compareBcrypt = (plain: string, hashed: string): Promise<boolean> => compare(plain, hashed);

export default compareBcrypt;
