module.exports = (sequelize, DataTypes) => {
  const operations = sequelize.define(
    'operations',
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

  return operations;
};
