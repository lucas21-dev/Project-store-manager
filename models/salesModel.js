const connection = require('./connection');

const getAllSalesModel = async () => {
  const query = `SELECT sp.sale_id, s.date, sp.product_id, sp.quantity 
  FROM StoreManager.sales AS s
  INNER JOIN StoreManager.sales_products AS sp
  ON s.id = sp.sale_id
  ORDER BY sp.sale_id, sp.product_id;`;

  const [result] = await connection.execute(query);

  return result;
};

const getSalesByIdModel = async (id) => {
  const query = `SELECT s.date, sp.product_id, sp.quantity 
  FROM StoreManager.sales AS s
  INNER JOIN StoreManager.sales_products AS sp
  ON s.id = sp.sale_id
  WHERE s.id = ?
  ORDER BY sp.product_id;`;

  const [result] = await connection.execute(query, [id]);
  
  return result;
};

module.exports = {
  getAllSalesModel,
  getSalesByIdModel,
};