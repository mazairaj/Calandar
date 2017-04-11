var mongoose = require('mongoose');

var schema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  day: {
    type: Date,
    required: true
  },
  startTime: {
    type: Number,
    required: true
  },
  endTime: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Event', schema);
