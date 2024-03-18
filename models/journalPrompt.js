const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Moon = require('lunarphase-js')
module.imports = { Moon }


const journalPromptSchema = new Schema({

  newMoon: {
    name: String, 
    type: String,
    ideas: ['Set New Intentions', 'Rest', 'Reflect', 'Fresh Start', 'Plan for the Upcoming Month']
  },
  waxingCrescent: {
    name: String, enum: 'Waxing Crescent',
    type: String,
    ideas: ['Hustle', 'Manifest', 'Time of Action']
  },
  firstQuarter: {
    name: String, 
    type: String,
    ideas: ['Work on Projects', 'Maintain Balance', 'Overcome obstacles', 'Makes Changes to Plans as Needed', ]
  },
waxingGibbous: {
    name: String, 
    type: String,
    enum: ['Time for Refinement', 'Endure', 'Celebrate']
},
  fullMoon: {
    name: String, 
    type: String,
    ideas: ['The Culmination', 'Things can Feel Intenese', 'Fullfillment', 'Gratitude', 'Put Your Project Out into the Wrold']
  },

  waningGibbous:{
    name: String, 
    type: String,
    ideas: ['Good time to Release', 'Let Go', 'Clear Space in all Dimensions']
  },

  thirdQuarter: {
    name: String, 
    type: String,
    enum: ['Balance', 'Set Boundaries', 'Finish Unfinished Projects', 'Good Time to Wrap Up any Loose Ends'] 
  },

  waningCrescent: {
    name: String, 
    type: String,
    ideas: ['Self-care', 'Recharge', 'Recuperate', 'Welcome the New Moon Approaching']
  },
  phase: {
    type: String,
    ref: 'Moon'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Journal Prompts', journalPromptSchema);