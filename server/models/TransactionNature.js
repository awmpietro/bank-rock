module.exports = (sequelize, DataTypes) => {
  const transaction_nature = sequelize.define(
    'transaction_nature',
    {
      name: {
        type: DataTypes.STRING,
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

  return transaction_nature;
};
