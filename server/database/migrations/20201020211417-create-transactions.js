module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      operationId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'operations',
          key: 'id',
        },
      },
      transactionNatureId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'transaction_nature',
          key: 'id',
        },
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      value: {
        allowNull: false,
        type: DataTypes.DECIMAL(10, 2),
      },
      createdAt: {
        allowNull: false,
        type: 'TIMESTAMP',
      },
      updatedAt: {
        allowNull: false,
        type: 'TIMESTAMP',
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('transactions');
  },
};
