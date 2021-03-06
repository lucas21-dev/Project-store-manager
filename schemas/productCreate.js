const joi = require('joi');

const productCreate = joi.object({
  name: joi.string().min(5).required().messages({
    'any.required': '400|"name" is required',
    'string.min': '422|"name" length must be at least 5 characters long',
  }),
  quantity: joi.number().positive().required().strict()
    .messages({
      'any.required': '400|"quantity" is required',
      'number.positive': '422|"quantity" must be greater than or equal to 1',
    }),
});

module.exports = productCreate;