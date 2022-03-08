const salesService = require('../services/salesService');
const salesModel = require('../models/salesModel');

const getAllSales = async (req, res, _next) => {
  const sales = await salesService.getAllSalesService();

  return res.status(200).json(sales);
};

const getSalesById = async (req, res, _next) => {
  const { id } = req.params;
  const filteredSales = await salesService.getSalesByIdService(Number(id));

  if (!filteredSales) return res.status(404).json({ message: 'Sale not found' });

  return res.status(200).json(filteredSales);
};

const createSale = async (req, res, _next) => {
  const salesCreated = await salesModel.createSaleModel(req.body);

  return res.status(201).json(salesCreated);
};

module.exports = {
  getAllSales,
  getSalesById,
  createSale,
};