const { Op } = require('sequelize');
const {
  users: UserModel,
  transactions: TransactionsModel,
  transactionNature: TransactionNatureModel,
} = require(`../models`);

const balance = async (req, res) => {
  try {
    const user = await UserModel.findOne({
      where: { email: req.session.email },
      attributes: ['id'],
    });
    const date = new Date();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const bal = await TransactionsModel.findAll({
      include: [
        { model: TransactionNatureModel, attributes: ['id'] },
      ],
      attributes: ['value'],
      where: {
        userId: user.dataValues.id,
        createdAt: {
          [Op.gte]: firstDay,
        },
      },
    });
    let incoming = 0;
    let outgoings = 0;

    for (const b of bal) {
      let val = parseFloat(b.value);
      if (b.transaction_nature.id == 1) {
        incoming += val;
      } else {
        outgoings += val;
      }
    }
    res.json({
      total: (incoming - outgoings).toFixed(2),
      incoming: incoming.toFixed(2),
      outgoings: outgoings.toFixed(2),
    });
  } catch (error) {
    res.status(500);
    res.json(error.message);
  }
};

module.exports = { balance };
