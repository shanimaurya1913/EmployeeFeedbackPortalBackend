import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { loginSchema, userSchema } from "../user/user.validator";
import UserRepository from "../user/user.service";
import { comparePasswords, generateToken, hashPassword } from "../lib/util";
import { IRole } from "../user/user.model";

export default class AuthController {
  public static async register(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const body = await userSchema.validateAsync(req.body);

      const { name, email, password } = body;

      const isAlreadyExits = await UserRepository.fetchUserByEmail(email);
      if (isAlreadyExits) {
        res
          .status(409)
          .json({ status: 409, data: null, error: "User Already exist!" });
        return;
      }

      const hashedPassword = await hashPassword(password);

      await UserRepository.createUser({
        name,
        email,
        password: hashedPassword,
        role: IRole.ADMIN,
      });

      res.status(201).json({
        status: 201,
        data: { message: "Admin created successfully!" },
        error: null,
      });
    } catch (error) {
      next(error);
    }
  }

  public static async login(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body);
      const body = await loginSchema.validateAsync(req.body, {
        abortEarly: false,
      });
      console.log("bodybody", body);

      const { email, password } = body;

      const user = await UserRepository.fetchUserByEmail(email);
      if (!user) {
        res
          .status(404)
          .json({ status: 404, data: null, error: "Email not register yet!" });
        return;
      }

      const isValid = await comparePasswords(password, user.password);
      if (!isValid) {
        res
          .status(401)
          .json({ status: 401, data: null, error: "Invalid credentials!" });
        return;
      }

      const { id, name, role } = user;

      const token = generateToken({ id, name, email, role });

      res.status(200).json({
        status: 200,
        data: { token },
        error: null,
      });
    } catch (error) {
      next(error);
    }
  }
}
