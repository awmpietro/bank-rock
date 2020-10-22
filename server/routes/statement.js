const express = require('express');

const Statement = express.Router();

const { statement } = require('../controllers/Statement');
const { authenticate } = require('../middlewares/auth');

Statement.get('/', authenticate, statement);
Statement.post('/add', authenticate, statement);

module.exports = Statement;
