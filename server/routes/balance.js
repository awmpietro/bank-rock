const express = require('express');

const Balance = express.Router();

const { balance } = require('../controllers/Balance');
const { authenticate } = require('../middlewares/auth');

Balance.get('/', authenticate, balance);

module.exports = Balance;
