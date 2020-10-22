module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('transaction_nature', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
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
    return queryInterface.dropTable('transaction_nature');
  },
};
