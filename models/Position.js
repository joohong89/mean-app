var mongoose = require('mongoose');


var PositionSchema = new mongoose.Schema({
  position: String,
  unit: Number,
  type: String,
  entry: Number,
  exit: Number,
  entryDate: Date,
  exitDate: Date,
  profit: Number
});

module.exports = mongoose.model('Position', PositionSchema);
