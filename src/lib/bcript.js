import bcrypt from 'bcrypt';

const { genSalt, hash, compare } = bcrypt;

export const createHash = async (password) =>
    await hash(password, await genSalt(10));

export const compareHash = async (body, exist) =>
    await compare(body.password, exist.password);
