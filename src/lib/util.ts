import jwt, { SignOptions } from "jsonwebtoken";
import bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET || "default_secret_key";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

export const generateToken = (payload: string | object | Buffer): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: 60 * 60 });
};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, JWT_SECRET);
};

export const hashPassword = async (plainPassword: string): Promise<string> => {
  const saltRounds = 10;
  return await bcrypt.hash(plainPassword, saltRounds);
};

export const comparePasswords = async (
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};
