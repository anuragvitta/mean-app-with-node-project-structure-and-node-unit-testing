const request = require('supertest');
const server = require('h:/student/index.js');
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
describe('User Registration', () => {
  const agent = request.agent(server);

//var server = require('h:/student/src/routes/user.js');
it('should return JSON', function(done) {
  chai.request(server)
    .post('/addstudent')
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('array');
      done();
    });
});
});