const {
  transactionNature: TransactionNatureModel,
} = require('../../models');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const tn = await TransactionNatureModel.findAll();
    if (tn.length > 0) {
      return;
    }
    return queryInterface.bulkInsert(
      'transaction_nature',
      [
        {
          name: 'Incoming',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          name: 'Outgoings',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('transaction_nature', null, {});
  },
};
