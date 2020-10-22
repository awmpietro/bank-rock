const today = new Date();

const { transactions: TransactionsModel } = require('../../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transactions = await TransactionsModel.findAll();
    if (transactions.length > 0) {
      return;
    }
    return queryInterface.bulkInsert(
      'transactions',
      [
        {
          operationId: 3,
          userId: 1,
          transactionNatureId: 1,
          value: 1500,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          operationId: 3,
          userId: 1,
          transactionNatureId: 1,
          value: 250.5,
          createdAt: new Date(
            today.getTime() + 1000 * 60 * 60 * 24,
          ).toISOString(),
          updatedAt: new Date(
            today.getTime() + 1000 * 60 * 60 * 24,
          ).toISOString(),
        },
        {
          operationId: 2,
          userId: 1,
          transactionNatureId: 2,
          value: 500,
          createdAt: new Date(
            today.getTime() + 1000 * 60 * 60 * 48,
          ).toISOString(),
          updatedAt: new Date(
            today.getTime() + 1000 * 60 * 60 * 48,
          ).toISOString(),
        },
        {
          operationId: 1,
          userId: 1,
          transactionNatureId: 2,
          value: 150,
          createdAt: new Date(
            today.getTime() + 1000 * 60 * 60 * 72,
          ).toISOString(),
          updatedAt: new Date(
            today.getTime() + 1000 * 60 * 60 * 72,
          ).toISOString(),
        },
        {
          operationId: 2,
          userId: 1,
          transactionNatureId: 1,
          value: 695.2,
          createdAt: new Date(
            today.getTime() + 1000 * 60 * 60 * 96,
          ).toISOString(),
          updatedAt: new Date(
            today.getTime() + 1000 * 60 * 60 * 96,
          ).toISOString(),
        },
        {
          operationId: 1,
          userId: 1,
          transactionNatureId: 2,
          value: 690,
          createdAt: new Date(
            today.getTime() + 1000 * 60 * 60 * 120,
          ).toISOString(),
          updatedAt: new Date(
            today.getTime() + 1000 * 60 * 60 * 120,
          ).toISOString(),
        },
        {
          operationId: 3,
          userId: 1,
          transactionNatureId: 1,
          value: 2100,
          createdAt: new Date(
            today.getTime() + 1000 * 60 * 60 * 144,
          ).toISOString(),
          updatedAt: new Date(
            today.getTime() + 1000 * 60 * 60 * 144,
          ).toISOString(),
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('transactions', null, {});
  },
};
