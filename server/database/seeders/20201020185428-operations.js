const { operations: OperationsModel } = require('../../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const operations = await OperationsModel.findAll();
    if (operations.length > 0) {
      return;
    }
    return queryInterface.bulkInsert(
      'operations',
      [
        {
          name: 'Withdraw',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          name: 'Transfer',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          name: 'Deposit',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('operations', null, {});
  },
};
