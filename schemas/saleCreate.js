const joi = require('joi');

const saleCreate = joi.object({
  productId: joi.number().positive().required().strict()
    .messages({
      'any.required': '400|"productId" is required',
    }),
  quantity: joi.number().positive().required().strict()
    .messages({
      'any.required': '400|"quantity" is required',
      'number.positive': '422|"quantity" must be greater than or equal to 1',
    }),
});

module.exports = saleCreate;