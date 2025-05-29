import { Router } from "express";
import FeedBackController from "./feedback.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.post("/", FeedBackController.createFeedBack);

router.get("/", authenticate, FeedBackController.fetchFeedBack);

router.patch("/:id", authenticate, FeedBackController.patchFeedBack);

router.delete("/:id", authenticate, FeedBackController.deleteFeedBack);

export default router;
