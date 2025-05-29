import Joi from "joi";

export const feedbackSchema = Joi.object({
  text: Joi.string().required(),
  category: Joi.string()
    .valid("Work Environment", "Leadership", "Growth", "Others")
    .required(),
  isReviewed: Joi.boolean().optional(),
  submittedAt: Joi.date().optional(),
});
