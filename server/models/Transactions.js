module.exports = (sequelize, DataTypes) => {
  const transactions = sequelize.define(
    'transactions',
    {
      operationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      transactionNatureId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      value: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      createdAt: {
        type: 'TIMESTAMP',
        allowNull: false,
      },
      updatedAt: {
        type: 'TIMESTAMP',
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
    },
  );

  return transactions;
};
