const express = require('express');
const { getAllSales, getSalesById } = require('../controllers/salesController');
const validateNewSale = require('../middlewares/validateNewSale');

const router = express.Router();

router.get('/', getAllSales);

router.get('/:id', getSalesById);

router.post('/', validateNewSale);

router.put('/:id', validateNewSale);

module.exports = router;