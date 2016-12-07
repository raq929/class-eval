'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Student = models.student;

const authenticate = require('./concerns/authenticate');

const index = (req, res, next) => {
  Student.find()
    .then(students => res.json({ students }))
    .catch(err => next(err));
};

const show = (req, res, next) => {
  Student.findById(req.params.id)
    .then(student => student ? res.json({ student }) : next())
    .catch(err => next(err));
};

const create = (req, res, next) => {
  let student = Object.assign(req.body.student);
  Student.create(student)
    .then(newStudent => res.json({ newStudent }))
    .catch(err => next(err));
};

module.exports = controller({
  index,
  create,
  show,
}, { before: [
  { method: authenticate },
], });
