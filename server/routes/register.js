const express = require('express');

const Register = express.Router();

const { register, remove } = require('../controllers/Register');

Register.post('/', register);
Register.post('/remove', remove);

module.exports = Register;
