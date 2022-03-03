const express = require('express');
const { errorHandler } = require('./middlewares');
require('dotenv').config();
require('express-async-errors');

const { productsRouter, salesRouter } = require('./routes');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productsRouter);
app.use('/sales', salesRouter);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
