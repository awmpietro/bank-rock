const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

const agent = chai.request.agent(app);
describe('Unauthenticated Tests', () => {
  let userEmail = '';
  it('should register a new user', (done) => {
    var size = 10;
    var charset = 'abcdefghijklmnopqrstuvwxyz';
    var i = 0,
      domain = '';
    while (i++ < size)
      domain += charset.charAt(Math.random() * charset.length);
    const userCredentials = {
      name: 'Test User',
      email: `${domain}@test.com`,
      password: '1234',
    };
    agent
      .post('/register')
      .send(userCredentials)
      .end(function (err, res) {
        if (err) {
          console.log(err.message);
        }
        expect(res).to.have.status(200);
        res.body.should.be.an('object');
        userEmail = res.body.email;
        done();
      });
  });
  after('remove', function (done) {
    agent
      .post('/register/remove')
      .send({ email: userEmail })
      .end(function (err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe('Authenticated Tests', () => {
  beforeEach('login before each test', function (done) {
    const userCredentials = {
      email: 'johndoe@test.com',
      password: '1234',
    };
    agent
      .post('/login')
      .send(userCredentials)
      .end(function (err, res) {
        expect(res).to.have.status(200);
        res.body.should.be.an('object');
        done();
      });
  });
  describe('Balance', () => {
    it('should get total, incoming and outgoings', (done) => {
      agent.get('/balance').end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        expect(res.body).to.have.keys([
          'total',
          'incoming',
          'outgoings',
        ]);
        done();
      });
    });
  });
  describe('Statement', () => {
    it('should get id, createdAt, historic, value, incoming and outgoings', (done) => {
      agent.get('/statement').end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        expect(res.body[0]).to.have.keys([
          'id',
          'createdAt',
          'historic',
          'value',
          'incoming',
          'outgoings',
        ]);
        done();
      });
    });
  });
  after('logout', function (done) {
    agent.get('/login/logout').end(function (err, res) {
      expect(res).to.have.status(200);
      done();
    });
  });
});
