import Joi from "joi";

export const UserValidatorSchema = (): Joi.ObjectSchema =>
  Joi.object({
    email: Joi.string()
      .email({
        tlds: { allow: false },
      })
      .required()
      .label("Email")
      .messages({
        "string.empty": "Email cannot be empty.",
      }),
  });
