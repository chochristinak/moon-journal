const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gainSchema = new Schema({
  gain: {
    type: String,
    required: true,
  },
  goalsDone: [{
    type: Schema.Types.ObjectId,
    ref: 'Goal'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Gain', gainSchema);