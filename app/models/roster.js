'use strict';

const mongoose = require('mongoose');

const rosterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  _instructors: {
    type:[{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
});

const Roster = mongoose.model('Roster', rosterSchema);

module.exports = Roster;
