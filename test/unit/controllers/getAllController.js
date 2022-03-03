const sinon = require('sinon');
const { expect } = require('chai');

const { getAllProducts } = require('../../../controllers/ProductsController');

describe('Verifica os controllers do endpoint products', () => {
  const req = {};
  const res = {};
  let next = () => {};

  const dbSucessResponse = [
    {
      "id": 1,
      "name": "produto A",
      "quantity": 10
    },
    {
      "id": 2,
      "name": "produto B",
      "quantity": 20
    }
  ];

  describe('Quando a requisição getAll é retornada com sucesso', () => {
    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    })

    it('Retorna um response com o status 200 no endpoint /products', async () => {
      await getAllProducts(req, res);

      expect(res.status.calledWith(200)).to.be.true;
    })

  })
});