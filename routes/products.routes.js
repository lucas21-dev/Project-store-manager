const express = require('express');
const { getAllProducts, getProductsById } = require('../controllers/ProductsController');

const router = express.Router();

router.get('/', getAllProducts);

router.get('/:id', getProductsById);

module.exports = router;