const sinon = require('sinon');
const { expect } = require('chai');

const { getAllProducts, getProductsById } = require('../../../controllers/ProductsController');
const productService = require('../../../services/productsService');
const productModel = require('../../../models/productsModel');

describe('Testa a camada controllers dos products', () => {
  const req = {};
  const res = {};
  let next = () => {};

  const dbSucessResponse = {
    "id": 1,
    "name": "produto A",
    "quantity": 10
  };

  const dbAllSucessResponse = [
    [
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
    ],
    []
  ];

  describe('Quando a requisição getAll é retornada com sucesso', () => {
    before(() => {
      sinon.stub(productModel, 'getAllProductsModel').resolves(dbAllSucessResponse);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    })

    after(() => {
      productModel.getAllProductsModel.restore();
    })

    it('Retorna um response com o status 200', async () => {
      await getAllProducts(req, res);

      expect(res.status.calledWith(200)).to.be.true;
    })
  });

  describe('Quando a requisição getById é retornada com sucesso', () => {
    before(() => {
      sinon.stub(productService, 'getByIdService').resolves(dbSucessResponse);
      req.params = {
        id: 1,
      }
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    after(() => {
      productService.getByIdService.restore()
    })

    it('Retorna uma response com status 200', async () => {
      await getProductsById(req, res);

      expect(res.status.calledWith(200)).to.be.true;
    })
  })

  describe('Quando a requisição não encontra o ID', () => {
    before(() => {
      sinon.stub(productService, 'getByIdService').resolves(dbSucessResponse);
      req.params = { 
        id: 10,
      }
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    after(() => {
      productService.getByIdService.restore()
    })

    it('Retorna uma response com status 404', async () => {
      await getProductsById(req, res);

      expect(res.status.calledWith(404)).to.be.true;
    })
  })

});