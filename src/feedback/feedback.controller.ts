import { Request, Response, NextFunction } from "express";
import FeedBackRepository from "./feedback.service";
import { feedbackSchema } from "./feedback.validator";
import { FeedbackCategory } from "./feedback.model";

export default class FeedBackController {
  public static async createFeedBack(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const body = await feedbackSchema.validateAsync(req.body, {
        abortEarly: false,
      });

      await FeedBackRepository.createFeedback(body);

      res.status(201).json({
        status: 201,
        data: { message: "Feedback created successfully!" },
        error: null,
      });
    } catch (err) {
      next(err);
    }
  }

  public static async fetchFeedBack(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const query = req.query.category;
      const feedback = await FeedBackRepository.fetchFeedBack(
        query as FeedbackCategory
      );
      // if (!feedback.length) {
      //   res
      //     .status(404)
      //     .json({ status: 404, data: null, error: "FeedBack not found" });
      //   return;
      // }

      res.status(200).json({ status: 200, data: feedback, error: null });
    } catch (err) {
      next(err);
    }
  }

  public static async patchFeedBack(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      console.log("req.params");
      console.log(req.params);

      const feedback = await FeedBackRepository.patchFeedBack(
        Number(req.params.id)
      );
      if (!feedback) {
        res
          .status(404)
          .json({ status: 404, data: null, error: "Feedback not found" });
        return;
      }

      res.status(200).json(feedback);
    } catch (err) {
      next(err);
    }
  }

  public static async deleteFeedBack(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const result = await FeedBackRepository.deleteFeedBack(
        Number(req.params.id)
      );
      if (!result) {
        res
          .status(404)
          .json({ status: 404, data: null, error: "Feedback not found" });
        return;
      }

      res.status(200).json({ message: "Deleted successfully" });
    } catch (err) {
      next(err);
    }
  }
}
