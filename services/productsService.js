const { getAllProductsModel } = require('../models/productsModel');

const getByIdService = async (id) => {
  const allData = await getAllProductsModel();
  
  const filteredData = allData.filter((data) => data.id === Number(id));

  return filteredData;
};

module.exports = {
  getByIdService,
};