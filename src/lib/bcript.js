import bcrypt from 'bcrypt';

const { genSalt, hash, compare } = bcrypt;

export const createHash = async (password) =>
    await hash(password, await genSalt(10));

export const compareHash = async (password, encrypted) =>
    await compare(password, encrypted);
