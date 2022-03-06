const sinon = require('sinon');
const { expect } = require('chai');

const salesService = require('../../../services/salesService');
const salesModel = require('../../../models/salesModel');

describe('Testa a camada Service das sales', () => {
  describe('Verifica o service getAll', () => {
    const mockModel = [
      {
        sale_id: 1,
        date: '2022-03-05T05:17:14.000Z',
        product_id: 1,
        quantity: 5
      },
      {
        sale_id: 1,
        date: '2022-03-05T05:17:14.000Z',
        product_id: 2,
        quantity: 10
      },
      {
        sale_id: 2,
        date: '2022-03-05T05:17:14.000Z',
        product_id: 3,
        quantity: 15
      }
    ];

  const mockService = [
    {
      saleId: 1,
      date: '2022-03-05T05:17:14.000Z',
      productId: 1,
      quantity: 5
    },
    {
      saleId: 1,
      date: '2022-03-05T05:17:14.000Z',
      productId: 2,
      quantity: 10
    },
    {
      saleId: 2,
      date: '2022-03-05T05:17:14.000Z',
      productId: 3,
      quantity: 15
    }
  ]

    before(() => {
      sinon.stub(salesModel, 'getAllSalesModel').resolves(mockModel);
    });

    after(() => {
      salesModel.getAllSalesModel.restore();
    });

    it('Retorna o array com as vendas', async () => {
      const allSales = await salesService.getAllSalesService();

      expect(allSales[0]).to.include.all.keys('date', 'saleId', 'productId', 'quantity');
    });
  });

  describe('Verifica o service getById quando é retornado com sucesso', () => {
    const mockIdModel = [
      { date: '2022-03-05T05:17:14.000Z', product_id: 1, quantity: 5 },
      { date: '2022-03-05T05:17:14.000Z', product_id: 2, quantity: 10 }
    ];

  const mockIdService = [
    { date: '2022-03-05T05:17:14.000Z', productId: 1, quantity: 5 },
    { date: '2022-03-05T05:17:14.000Z', productId: 2, quantity: 10 }
  ]

    before(() => {
      sinon.stub(salesModel, 'getSalesByIdModel').resolves(mockIdModel);
    });

    after(() => {
      salesModel.getSalesByIdModel.restore();
    });

    it('Retorna o array com as vendas por ID', async () => {
      const IDSales = await salesService.getSalesByIdService(1);

      expect(IDSales).to.exist;
    });
  })

  describe('Verifica o service getById quando é retornado com falha', () => {
    before(() => {
      sinon.stub(salesModel, 'getSalesByIdModel').resolves([]);
    });

    after(() => {
      salesModel.getSalesByIdModel.restore();
    });

    it('Retorna null', async () => {
      const IDSales = await salesService.getSalesByIdService(20);

      expect(IDSales).to.be.deep.equal(null);
    });
  })
});