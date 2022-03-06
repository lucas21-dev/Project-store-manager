const express = require('express');
const {
  getAllProducts,
  getProductsById,
  createProduct,
} = require('../controllers/ProductsController');
const { validateNewProduct } = require('../middlewares');

const router = express.Router();

router.get('/', getAllProducts);

router.get('/:id', getProductsById);

router.post('/', validateNewProduct, createProduct);

router.put('/:id', validateNewProduct);

module.exports = router;