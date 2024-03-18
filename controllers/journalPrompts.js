const { Moon } = require('lunarphase-js')
const JournalPrompt = require('../models/journalPrompt');

module.imports = { Moon, JournalPrompt }

module.exports = {
  show: showPrompts,
}

async function showPrompts(req, res) {
  const journalPrompts = await JournalPrompt.find({}, {_ideas: 1});
  console.log(JournalPrompt.find({}, {_ideas: 1}))
  const phaseEmoji = Moon.lunarPhaseEmoji();
  const phase = Moon.lunarPhase(); const getJulianDate = (date = new Date()) => {
    const time = date.getTime();
    const tzoffset = date.getTimezoneOffset()

    return (time / 86400000) - (tzoffset / 1440) + 2440587.5;
  }

  // console.log(journalPrompts.newMoonPrompt)
  res.render('journalprompts/show', { title: 'Working With Moon Energies', journalPrompts, phaseEmoji, phase });
}

