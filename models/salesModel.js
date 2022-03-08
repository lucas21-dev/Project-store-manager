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

const createSaleModel = async (sales) => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUE(now());';
  const querySaleProduct = `INSERT INTO StoreManager.sales_products 
  (sale_id, product_id, quantity) VALUE (?, ?, ?);`;

  const [result] = await connection.execute(query);

  await Promise.all(sales.map(async (saleData) => {
    const { productId, quantity } = saleData;
    await connection.execute(querySaleProduct, [result.insertId, productId, quantity]);
  }));

  return {
    id: result.insertId,
    itemsSold: [...sales],
  };
};

module.exports = {
  getAllSalesModel,
  getSalesByIdModel,
  createSaleModel,
};