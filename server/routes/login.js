const express = require('express');

const Login = express.Router();

const { login, logout, session } = require('../controllers/Login');
const { authenticate } = require('../middlewares/auth');

Login.post('/', login);
Login.get('/logout', logout);
Login.get('/session', authenticate, session);

module.exports = Login;
