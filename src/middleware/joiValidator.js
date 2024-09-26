const Joi = require('joi');

// Joi schema for creating a new user
const userCreateSchema = Joi.object({
    userId: Joi.string().required(),
    name: Joi.string().min(3).max(30).required(),
    userImage: Joi.string().uri().required(),
    age: Joi.number().integer().positive().required(),
    salary: Joi.number().positive().required(),
  });

// Joi schema for user update validation
const userUpdateSchema = Joi.object({
    name: Joi.string().min(3).max(30),
    userImage: Joi.string().uri(),
    age: Joi.number().integer().positive(),
    salary: Joi.number().positive(),
  });

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ success: false, message: error.details[0].message });
  }
  next();
};

module.exports = { validate, userUpdateSchema, userCreateSchema };
