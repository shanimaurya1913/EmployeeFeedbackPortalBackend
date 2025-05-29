import { AppDataSource } from "../config/data-source";
import { FeedBack, FeedbackCategory } from "./feedback.model";

const feedbackRepository = AppDataSource.getRepository(FeedBack);

export default class FeedBackRepository {
  static createFeedback = async (data: Partial<FeedBack>) => {
    return await feedbackRepository.save(data);
  };

  static async fetchFeedBack(category?: FeedbackCategory) {
    if (category) {
      return await feedbackRepository.find({
        where: { category },
      });
    }

    return await feedbackRepository.find();
  }

  static async patchFeedBack(id: number) {
    return await feedbackRepository.update({ id }, { isReviewed: true });
  }

  static async deleteFeedBack(id: number) {
    return await feedbackRepository.delete(id);
  }
}
