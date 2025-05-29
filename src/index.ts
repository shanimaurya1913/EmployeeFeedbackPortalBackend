import dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import { AppDataSource } from "./config/data-source";
import routesV1 from "./config/index";
import errorHandlingMiddleWare from "./middlewares/global.error";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: "*" }));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Server is on" });
});

app.use("/api", routesV1); // V1 Routes

app.use(errorHandlingMiddleWare);

// app.use("*", (req: Request, res: Response) => {
//   res.status(404).json({ status: 404, error: `Requested endpoint not found` });
// });

AppDataSource.initialize()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server Start On http://localhost:${port}`);
    });
  })
  .catch((error) => console.log(`Error while connect with DB`, error));
