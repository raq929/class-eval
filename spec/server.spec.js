'use strict';

const request = require('supertest');

describe('loading express', function () {
  let server;
  beforeEach(function () {
    let app = require('../server');
    server = app.server;
  });
  afterEach(function () {
    server.close();
  });
  it('responds to /', function testSlash(done) {
    request(server)
      .get('/')
      .expect(200, done);
  });
  it('gets 404 for unknown routes', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
  it("get 'examples/' returns json", function getExample(done) {
    request(server)
      .get('/examples')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  it("post 'sign-up/' creates a user", function postUser(done) {
    const request_obj = {
      'credentials': {
        'email': 'r@r.com',
        'password': 'izcool',
        'password_confirmation': 'izcool'
      }
    }
    request(server)
      .post('/sign-up')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .send(request_obj)
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
