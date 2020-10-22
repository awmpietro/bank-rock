const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'production';
const config = require(`${__dirname}/../config/database`)[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(
    process.env[config.use_env_variable],
    config,
  );
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = require('./Users')(sequelize, Sequelize);
db.transactions = require('./Transactions')(sequelize, Sequelize);
db.transactionNature = require('./TransactionNature')(
  sequelize,
  Sequelize,
);
db.operations = require('./Operations')(sequelize, Sequelize);

db.transactions.belongsTo(db.users, {
  foreignKey: 'userId',
});

db.transactions.belongsTo(db.operations, {
  foreignKey: 'operationId',
});

db.transactions.belongsTo(db.transactionNature, {
  foreignKey: 'transactionNatureId',
});

module.exports = db;
