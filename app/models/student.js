'use strict';

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

studentSchema.virtual('full_name').get(function length() {
  return `${this.first_name} ${this.last_name}`;
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
