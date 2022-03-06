const productsModel = require('../models/productsModel');

const getByIdService = async (id) => {
  const allData = await productsModel.getAllProductsModel();
  
  const filteredData = allData.filter((data) => data.id === Number(id));

  return filteredData;
};

const updateProductService = async ({ id, name, quantity }) => {
  const productChanged = await productsModel.updateProductModel({ id, name, quantity });

  if (!productChanged.rowls) return { message: 'Product not found' };

  return {
    name: productChanged.name,
    quantity: productChanged.quantity,
  };
};

const deleteProductService = async (id) => {
  const productDeleted = await productsModel.deleteProductModel(id);

  if (!productDeleted.rowls) return { message: 'Product not found' };

  return productDeleted;
};

module.exports = {
  getByIdService,
  updateProductService,
  deleteProductService,
};