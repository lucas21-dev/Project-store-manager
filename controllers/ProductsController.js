const productsModel = require('../models/productsModel');
const productsService = require('../services/productsService');

const getAllProducts = async (req, res, _next) => {
  const products = await productsModel.getAllProductsModel();

  return res.status(200).json(products);
};

const getProductsById = async (req, res, _next) => {
  const { id } = req.params;
  const product = await productsService.getByIdService(id);

  if (product.length === 0) return res.status(404).json({ message: 'Product not found' });

  return res.status(200).json(product[0]);
};

const createProduct = async (req, res, _next) => {
  const productCreated = await productsModel.createProductModel(req.body);

  return res.status(201).json(productCreated);
};

module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
};