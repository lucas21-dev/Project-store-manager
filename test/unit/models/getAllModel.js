const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../models/connection');
const productsModel = require('../../../models/productsModel');

describe('Retorna os produtos do banco de dados', () => {
  const dbSucessResponse = [
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

  const productsTable = 'products';
  describe('Verifica se retorna os produtos com sucesso', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves(dbSucessResponse);
    });

    it('Retorna um array com objetos contendo as informações dos produtos', async () => {
      const modelResponse = await productsModel.getAllProductsModel(productsTable);

      expect(modelResponse).to.be.deep.equal(dbSucessResponse[0]);
    });
  });
});