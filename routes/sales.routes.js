const express = require('express');
const validateNewSale = require('../middlewares/validateNewSale');
const { getAllSales, getSalesById, createSale } = require('../controllers/salesController');

const router = express.Router();

router.get('/', getAllSales);

router.get('/:id', getSalesById);

router.post('/', validateNewSale, createSale);

router.put('/:id', validateNewSale);

module.exports = router;