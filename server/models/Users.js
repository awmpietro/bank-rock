module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
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

  return users;
};
