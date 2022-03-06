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

const updateProductModel = async ({ name, quantity, id }) => {
  const query = 'UPDATE StoreManager.products SET name = ?, quantity = ? WHERE id = ?;';
  const [result] = await connection.execute(query, [name, quantity, id]);

  return {
    rowls: result.affectedRows,
    name,
    quantity,
  };
};

module.exports = {
  getAllProductsModel,
  createProductModel,
  updateProductModel,
};