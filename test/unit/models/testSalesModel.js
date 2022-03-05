const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../models/connection');
const { getAllSalesModel, getSalesByIdModel } = require('../../../models/salesModel');

describe('Testa a camada Model das sales', () => {
  describe('Verifica se retorna as vendas com sucesso', () => {
    const getAllDbSucessResponse = [
    [
      {
        "saleId": 1,
        "date": "2021-09-09T04:54:29.000Z",
        "productId": 1,
        "quantity": 2
      },
      {
        "saleId": 1,
        "date": "2021-09-09T04:54:54.000Z",
        "productId": 2,
        "quantity": 2
      }
    ],
    []
  ];

    before(() => {
      sinon.stub(connection, 'execute').resolves(getAllDbSucessResponse);
    });
    
    after(() => {
      connection.execute.restore();
    });

    it('Retorna um array com objetos contendo as informações das vendas', async () => {
      const modelResponse = await getAllSalesModel();

      expect(modelResponse).to.be.deep.equal(getAllDbSucessResponse[0]);
    });
  });

  describe('Verifica a requisição de vendas com um ID especfico', () => {
    const getByIdSucessResponse = [
      [
        {
          "date": "2021-09-09T04:54:29.000Z",
          "productId": 1,
          "quantity": 2
        },
        {
          "date": "2021-09-09T04:54:54.000Z",
          "productId": 2,
          "quantity": 2
        }
      ],
      []
    ];

    before(() => {
      sinon.stub(connection, 'execute').resolves(getByIdSucessResponse);
    });

    after(() => {
      connection.execute.restore();
    });

    it('Retorna um array contendo as vendas com o ID passado', async () => {
    const modelResponse = await getSalesByIdModel();

    expect(modelResponse).to.be.deep.equal(getByIdSucessResponse[0]);
    });
  })
});

