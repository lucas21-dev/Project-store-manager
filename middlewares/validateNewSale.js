const saleCreate = require('../schemas/saleCreate');

const validateNewSale = (req, res, next) => {
  req.body.find((body) => {
    if (saleCreate.validate(body).error) {
    const [code, message] = saleCreate.validate(body).error.message.split('|');
    return res.status(code).json({ message });
  }
  return false;
  });

  next();
};

module.exports = validateNewSale;