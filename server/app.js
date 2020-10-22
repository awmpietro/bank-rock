require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const redis = require('redis');
const redisStore = require('connect-redis')(session);
const client = redis.createClient({
  host: 'cache',
  port: 6379,
});
const helmet = require('helmet');

const port = process.env.PORT || 8080;

// Routes
const Register = require('./routes/register');
const Login = require('./routes/login');
const Statement = require('./routes/statement');
const Balance = require('./routes/balance');

const app = express();

app.use(
  session({
    secret: '4cadiafoundation',
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
    store: new redisStore({
      host: 'cache',
      port: 6379,
      client: client,
      ttl: 260,
    }),
    saveUninitialized: true,
    resave: true,
  }),
);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.header('Origin'));
  res.header('Access-Control-Allow-Credentials', true);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, DELETE',
  );
  next();
});
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());

app.use('/register', Register);
app.use('/login', Login);
app.use('/statement', Statement);
app.use('/balance', Balance);
app.use((req, res) => {
  res.status(404).send('Unable to find the requested resource');
});

app.listen(port);

module.exports = app;
