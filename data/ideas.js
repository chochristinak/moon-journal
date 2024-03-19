const Moon = require('lunarphase-js')
module.imports = { Moon }

const ideas = {
NEW:['Set New Intentions', 'Rest', 'Reflect', 'Fresh Start', 'Plan for the Upcoming Month'],
WAXING_CRESCENT:['Hustle', 'Manifest', 'Time of Action'],
fFIRST_QUARTER:['Work on Projects', 'Maintain Balance', 'Overcome obstacles', 'Makes Changes to Plans as Needed'],
WAXING_GIBBOUS:['Time for Refinement', 'Endure', 'Celebrate'],
FULL:['The Culmination', 'Things can Feel Intenese', 'Fullfillment', 'Gratitude', 'Put Your Project Out into the Wrold'],
WANING_GIBBOUS:['Good time to Release', 'Let Go', 'Clear Space in all Dimensions'],
LAST_QUARTER: ['Balance', 'Set Boundaries', 'Finish Unfinished Projects', 'Good Time to Wrap Up any Loose Ends'],
WANING_CRESCENT: ['Self-care', 'Recharge', 'Recuperate', 'Welcome the New Moon Approaching'],
currentPhase: Moon.LunarPhase
}

module.exports = ideas 
console.log(ideas.currentPhase)