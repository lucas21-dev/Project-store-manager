const { getAllProductsModel, createProductModel } = require('../models/productsModel');
const { getByIdService } = require('../services/productsService');

const getAllProducts = async (req, res, _next) => {
  const products = await getAllProductsModel();

  return res.status(200).json(products);
};

const getProductsById = async (req, res, _next) => {
  const { id } = req.params;
  const product = await getByIdService(id);

  if (product.length === 0) return res.status(404).json({ message: 'Product not found' });

  return res.status(200).json(product[0]);
};

const createProduct = async (req, res, _next) => {
  const productCreated = await createProductModel(req.body);

  return res.status(201).json(productCreated);
};

module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
};