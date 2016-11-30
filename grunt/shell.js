'use strict';

const testDatabase = 'mongodb://localhost/express-api-template-test';

module.exports = {
  server: {
    command: 'npm start'
  },
  test: {
    // set the path to the root directory, set the database to the test database
    command: `NODE_PATH=$PWD MONGODB_URI=${testDatabase} grunt mocha`
  }
};
