const { getAllSalesService, getSalesByIdService } = require('../services/salesService');

const getAllSales = async (req, res, _next) => {
  const sales = await getAllSalesService();

  return res.status(200).json(sales);
};

const getSalesById = async (req, res, _next) => {
  const { id } = req.params;
  const filteredSales = await getSalesByIdService(Number(id));

  if (!filteredSales) return res.status(404).json({ message: 'Sale not found' });

  return res.status(200).json(filteredSales);
};

module.exports = {
  getAllSales,
  getSalesById,
};