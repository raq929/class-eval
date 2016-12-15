'use strict';

const notFound = require('app/middleware/404');

// This method should only be used *after* authenticate
const checkAdminStatus = (req, res, next) => {
  console.log('checking admin status')
  if (req.currentUser && req.currentUser.isAdmin) {
    return next();
  }
  return notFound(req, res, next);
};

module.exports = checkAdminStatus;
