import Joi from "joi";

const organizerSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  phone: Joi.string().required(),
  email: Joi.string().required(),
  twitter: Joi.string().required(),
  description: Joi.string().required(),
  instagram: Joi.string().required(),
  facebook: Joi.string().required(),
});

const organizerUpdateSchema = Joi.object({
  name: Joi.string().min(2).max(50),
  phone: Joi.string(),
  email: Joi.string(),
  twitter: Joi.string(),
  description: Joi.string(),
  instagram: Joi.string(),
  facebook: Joi.string(),
});

export const validateOrganizerData = function (req, res, next) {
  let { error, value } = organizerSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }
  req.body = value;
  next();
};

export const validateOrganizerUpdateData = function (req, res, next) {
  let { error, value } = organizerSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }
  req.body = value;
  next();
};
