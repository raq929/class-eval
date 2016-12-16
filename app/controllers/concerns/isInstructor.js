'use strict';

const debug = require('debug')('student-eval:error-handler');
const models = require('app/models');
const notFound = require('app/middleware/404');
const Roster = models.roster;

// This method should only be used *after* authenticate
const isInstructor = (req, res, next) => {
  if (req.currentUser.isAdmin) {
    return next();
  } else if (req.currentUser && req.params.id) {
    debug('there is a current user and roster id');
    const id = req.currentUser._id;
    Roster.findById(req.params.id)
    .then((roster) => {
      if (roster._instructors.indexOf(id) !== -1) {
        debug('user is an owner or instructor');
        return next();
      } else {
        return notFound(req, res, next);
      }
    })
    .catch((err) => {
      next(err);
    });
  } else {
    return notFound(req, res, next);
  }

};

module.exports = isInstructor;
