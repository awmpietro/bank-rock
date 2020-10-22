const {
  users: UserModel,
  transactions: TransactionsModel,
  transactionNature: TransactionNatureModel,
  operations: OperationsModel,
} = require(`../models`);

const statement = async (req, res) => {
  try {
    const user = await UserModel.findOne({
      where: { email: req.session.email },
      attributes: ['id'],
    });
    const statement = await TransactionsModel.findAll({
      include: [
        { model: TransactionNatureModel, attributes: ['id', 'name'] },
        { model: OperationsModel, attributes: ['id', 'name'] },
      ],
      attributes: ['id', 'value', 'createdAt'],
      where: { userId: user.dataValues.id },
    });
    const fmtResults = [];
    for (const st of statement) {
      fmtResults.push({
        id: st.id,
        createdAt: st.createdAt,
        historic: st.operation.name,
        value: st.value,
        incoming:
          st.transaction_nature.name === 'Incoming' ? true : false,
        outgoings:
          st.transaction_nature.name === 'Outgoings' ? true : false,
      });
    }
    res.json(fmtResults);
  } catch (error) {
    res.status(500);
    res.json(error.message);
  }
};

module.exports = { statement };
