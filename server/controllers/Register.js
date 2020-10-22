const bcrypt = require('bcrypt');
const { sequelize } = require('../models/index');
const { users: UserModel } = require(`../models`);

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    await UserModel.create({
      name,
      email,
      password: hashedPassword,
      createdAt: sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: sequelize.literal('CURRENT_TIMESTAMP'),
    });
    req.session.email = email;
    return res.json({ name, email });
  } catch (error) {
    res.status(500);
    return res.send(`Error : ${error.message}`);
  }
};

const remove = async (req, res) => {
  try {
    await UserModel.destroy({ where: { email: req.body.email } });
    return res.json('Deleted Succesfully');
  } catch (error) {
    res.status(500);
    return res.send(`Error : ${error.message}`);
  }
};

module.exports = { register, remove };
