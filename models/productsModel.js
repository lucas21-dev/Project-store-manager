const connection = require('./connection');

const getAllProductsModel = async () => {
  const query = 'SELECT id, name, quantity FROM StoreManager.products ORDER BY id ASC;';
  const [result] = await connection.execute(query);

  return result;
};

const createProductModel = async ({ name, quantity }) => {
  const query = 'INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?)';
  const [result] = await connection.execute(query, [name, quantity]);

  return {
    id: result.insertId,
    name,
    quantity,
  };
};

module.exports = {
  getAllProductsModel,
  createProductModel,
};