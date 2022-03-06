const { getAllProductsModel } = require('../models/productsModel');
const productCreate = require('../schemas/productCreate');

const validateNewProduct = async (req, res, next) => {
  const { error } = productCreate.validate(req.body);

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }

  const actualProducts = await getAllProductsModel();
  const validateName = actualProducts
    .filter((prod) => prod.name.toLowerCase() === req.body.name.toLowerCase());
  if (validateName.length > 0) {
    return res.status(409).json({ message: 'Product already exists' });
  }

  next();
};

module.exports = validateNewProduct;