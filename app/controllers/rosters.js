'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Roster = models.roster;

const authenticate = require('./concerns/authenticate');

const index = (req, res, next) => {
  Roster.find()
    .then((rosters) => {
      res.json({ rosters });
    })
    .catch(err => next(err));
};

const show = (req, res, next) => {
  Roster.findById(req.params.id)
    .populate('students', '-updatedAt -createdAt')
    .populate('_instructors', '_id email')
    .then((roster) => {
      if(!roster) {
        next();
      }
      res.json({ roster });
    })
    .catch(err => next(err));
};

const destroy = (req, res, next) => {
  let search = { _id: req.params.id, _owner: req.currentUser._id };
  Roster.findOne(search)
    .then(roster => {
      if (!roster) {
        return next();
      }
      return roster.remove()
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
};

const create = (req, res, next) => {
  let roster = Object.assign(req.body.roster, {
    _owner: req.currentUser._id,
  });
  Roster.create(roster)
    .then(newRoster => res.json({ roster: newRoster }))
    .catch(err => next(err));
};

const update = (req, res, next) => {
  let search = { _id: req.params.id };
  Roster.findOne(search)
    .then(roster => {
      if (!roster) {
        return next();
      }

      delete req.body._owner;  // disallow owner reassignment.
      delete req.body.id; //don't assign an id
      let newStudents = req.body.roster.students ? req.body.roster.students : null;
      if(newStudents) {
        roster.students.addToSet.apply(roster.students, newStudents);
        delete req.body.students; // don't include students in the general update
      }
      if(req.body.name) {
        roster.update({ name: req.body.name })
        .catch(err => next(err));
      }
      return roster.save();
    })
    .then(() => res.sendStatus(200))
    .catch(err => next(err));
};

const removeStudent = (req, res, next) => {
  let search = { _id: req.params.id };
  Roster.findOne(search)
    .then(roster => {
      if (!roster) {
        return next();
      }
      const students = roster.students;
      if(students.length >= 0 && req.body.roster && req.body.roster.student) {
        return roster.update({
          $pull: { 'students': req.body.roster.student}
        });
      }
    })
    .then(() => res.sendStatus(200))
    .catch(err => next(err));
};

const addInstructor = (req, res, next) => {
  let search = { _id: req.params.id };
  Roster.findOne(search)
    .then(roster => {
      let newInstructors = req.body.roster.instructors ? req.body.roster.instructors : null;
      let currentInstructors = roster._instructors;
      if(newInstructors) {
        currentInstructors.addToSet.apply(currentInstructors, newInstructors);
        delete req.body._instructors; // don't include instructors in the general update
        return roster.save();
      }
    })
    .then(( /* roster */ ) => res.sendStatus(200))
    .catch(err => next(err));
};

const removeInstructor = (req, res, next) => {
  let search = { _id: req.params.id };
  Roster.findOne(search)
    .then(roster => {
      if (!roster) {
        return next();
      }
      const instructors = roster._instructors;
      if(instructors.length >= 0 && req.body.roster && req.body.roster.instructor) {
        return roster.update({
          $pull: { '_instructors': req.body.roster.instructor }
        })
        .then(() => res.sendStatus(200));
      }
    })
    .catch(err => next(err));
};


module.exports = controller({
  index,
  create,
  destroy,
  show,
  update,
  removeStudent,
  addInstructor,
  removeInstructor,
}, { before: [
  { method: authenticate },
], });
