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

const updateProduct = async (req, res, _next) => {
  const request = {
    id: req.params.id,
    ...req.body,
  };

  const productChangedService = await productsService.updateProductService(request);
  if (productChangedService.message) return res.status(404).json(productChangedService);

  const response = {
    id: Number(req.params.id),
    ...productChangedService,
  };

  return res.status(200).json(response);
};

const deleteProduct = async (req, res, _next) => {
  const { id } = req.params;

  const productDeleted = await productsService.deleteProductService(id);
  if (productDeleted.message) return res.status(404).json(productDeleted);

  return res.status(204).end();
};

module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
};