const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { Moon } = require('lunarphase-js');


module.imports = { Moon }

const journalSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  journalPromtps: [{
    type: Schema.Types.ObjectId,
    ref: 'Journal Prompts'
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String,

}, {
  timestamps: true
});


const goalSchema = new Schema({
  goal: String,
  actionItems: String,
  setIntentions: String,
  productivityIdeas: String,
  additionalDetail: String,
  finishby: {
    type: Date,
      default: function () {
      let OneYearLater = new Date()
      OneYearLater.setFullYear(OneYearLater.getFullYear() + 1);
      return OneYearLater.toISOString().slice(0, 16)
  }
},
accomplished: {
  type:Boolean
},
  journalEntry: [journalSchema],
  
doneList: [{
  type: Schema.Types.ObjectId,
  ref: 'Goal'
}],
  
}, {
  timestamps: true
});
module.exports = mongoose.model('Goal', goalSchema)