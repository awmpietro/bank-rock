const bcrypt = require('bcrypt');

const { users: UserModel } = require(`../models`);

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({
      where: { email },
      attributes: ['id', 'name', 'email', 'password'],
    });
    if (user) {
      const isMatch = await bcrypt.compare(
        password,
        user.dataValues.password,
      );
      if (isMatch) {
        delete user.dataValues.password;
        req.session.id = user.dataValues.id;
        req.session.email = email;
        return res.json({ user });
      } else {
        res.status(401);
        res.json('Email or password invalid');
        return 'Password invalid';
      }
    } else {
      res.status(401);
      res.json('Email or password invalid');
      return 'Email or password invalid';
    }
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json(error.message);
    return error;
  }
};

const session = (req, res) => {
  return res.json(req.session.email);
};

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500);
      return res.json("Couldn't make logout");
    }
    res.clearCookie('connect.sid');
    return res.json('Logout succesfully');
  });
};

module.exports = { login, session, logout };
