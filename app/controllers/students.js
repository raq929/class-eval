'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Student = models.student;

const authenticate = require('./concerns/authenticate');

const index = (req, res, next) => {
  Student.find()
    .then(classes => res.json({ classes }))
    .catch(err => next(err));
};

const create = (req, res, next) => {
  console.log('creating')
  let student = Object.assign(req.body.student);
  Student.create(student)
    .then(newStudent => res.json({ newStudent }))
    .catch(err => next(err));
};

module.exports = controller({
  index,
  create,
}, { before: [
  { method: authenticate, except: ['index', 'show'] },
], });
