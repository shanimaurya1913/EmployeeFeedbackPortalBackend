import { AppDataSource } from "../config/data-source";
import { User } from "./user.model";

const userRepository = AppDataSource.getRepository(User);

export default class UserRepository {
  static fetchUserByEmail = async (email: string) => {
    return await userRepository.findOne({ where: { email } });
  };

  static createUser = async (data: Partial<User>) => {
    return await userRepository.save(data);
  };
}
