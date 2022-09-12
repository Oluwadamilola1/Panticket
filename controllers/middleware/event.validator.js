import Joi from "joi";

const eventSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  location: Joi.string().min(2).max(50).required(),
  date: Joi.string().required(),
  time: Joi.string().required(),
  isFeatured: Joi.boolean(),
  description: Joi.string().required(),
  ticketTypes: Joi.array().items(Joi.string()),
  organizer: Joi.string().required(),
  category: Joi.string().required(),
});

const eventUpdateSchema = Joi.object({
  name: Joi.string().min(2).max(50),
  location: Joi.string().min(2).max(50),
  date: Joi.string(),
  time: Joi.string(),
  isFeatured: Joi.boolean(),
  description: Joi.string(),
  ticketTypes: Joi.array(),
  organizer: Joi.string(),
  category: Joi.string(),
});

export const validateEventData = function (req, res, next) {
  let { error, value } = eventSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }
  req.body = value;
  next();
};
export const validateEventUpdateData = function (req, res, next) {
  let { error, value } = eventSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }
  req.body = value;
  next();
};
