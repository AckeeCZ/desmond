import { compare } from 'bcrypt';

const compareBcrpyt = (plain: string, hashed: string): Promise<boolean> => compare(plain, hashed);

export default compareBcrpyt;
