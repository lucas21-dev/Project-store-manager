const salesModels = require('../models/salesModel');

const getAllSalesService = async () => {
  const rawSales = await salesModels.getAllSalesModel();

  const salesData = rawSales.map((sale) => ({
    saleId: sale.sale_id,
    date: sale.date,
    productId: sale.product_id,
    quantity: sale.quantity,
  }));

  return salesData;
};

const getSalesByIdService = async (id) => {
  const rawSale = await salesModels.getSalesByIdModel(id);

  if (!rawSale.length) return null;

  const saleDataById = rawSale.map((salesData) => ({
    date: salesData.date,
    productId: salesData.product_id,
    quantity: salesData.quantity,
  }));

  return saleDataById;
};

module.exports = {
  getAllSalesService,
  getSalesByIdService,
};