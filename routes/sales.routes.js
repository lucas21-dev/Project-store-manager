const express = require('express');
const { getAllSales, getSalesById } = require('../controllers/salesController');

const router = express.Router();

router.get('/', getAllSales);

router.get('/:id', getSalesById);

module.exports = router;