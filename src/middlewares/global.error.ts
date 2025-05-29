import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { QueryFailedError } from "typeorm";

function errorHandlingMiddleWare(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // logger here
  console.log(err, "eeeee");

  // JOI Error
  if (err instanceof Joi.ValidationError) {
    type Obj = {
      label: string | number;
      msg: string;
    };
    const error: Array<Obj> = [];
    err.details.forEach((e) => {
      const data = {
        label: e.path[0],
        msg: e.message,
      };
      error.push(data);
    });
    res.status(422).json({
      status: 422,
      data: null,
      error: { message: "Validation Error", errors: error },
    });
    return;
  }

  res.status(500).json({ status: 500, error: "Internal Server Error" });
}
export default errorHandlingMiddleWare;
