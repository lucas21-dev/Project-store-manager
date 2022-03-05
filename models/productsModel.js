const connection = require('./connection');

const getAllProductsModel = async () => {
  const query = 'SELECT id, name, quantity FROM StoreManager.products ORDER BY id ASC;';
  const [result] = await connection.execute(query);

  return result;
};

module.exports = {
  getAllProductsModel,
};