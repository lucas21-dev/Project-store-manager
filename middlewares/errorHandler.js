const errorHandler = (error, _req, res, _next) => {
  console.log(error);

  return res.status(500).json('Algo deu errado!');
};

module.exports = errorHandler;