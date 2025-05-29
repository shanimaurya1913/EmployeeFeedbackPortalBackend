import { DataSource } from "typeorm";
import { FeedBack } from "../feedback/feedback.model";
import { User } from "../user/user.model";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_POST),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  //   logging: true,
  entities: [User, FeedBack],
  subscribers: [],
  migrations: [],
});
