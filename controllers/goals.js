const goal = require('../models/goal');
const Goal = require('../models/goal');
const { Moon } = require('lunarphase-js')

module.imports = { Moon }
module.exports = {
  index,
  show,
  new: newGoal,
  create,
  // done
};

// async function done(req, res){
//   const goal = Goal.findById(req.params.id).populate('doneList')
//   goal.doneList.push(req.body.id)
//   await goal.save(); // save that data in the database
//   res.redirect(`/goals/${goal._id}`)
// }

async function index(req, res) {
  const goals = await Goal.find({});
  const phaseEmoji = Moon.lunarPhaseEmoji();
  const phase = Moon.lunarPhase(); const getJulianDate = (date = new Date()) => {
    const time = date.getTime();
    const tzoffset = date.getTimezoneOffset()

    return (time / 86400000) - (tzoffset / 1440) + 2440587.5;
  }
  res.render('goals/index', { title: 'Moon goals', goals, phaseEmoji, phase });
}

async function show(req, res) {
  const goal = await Goal.findById(req.params.id).populate('journalEntry');
  console.log(goal)
  const phaseEmoji = Moon.lunarPhaseEmoji();
  const phase = Moon.lunarPhase(); const getJulianDate = (date = new Date()) => {
    const time = date.getTime();
    const tzoffset = date.getTimezoneOffset()

    return (time / 86400000) - (tzoffset / 1440) + 2440587.5;
  }
  res.render('goals/show', { title: 'Goal Details', goal, phase, phaseEmoji });
}

function newGoal(req, res) {
  const newGoaldate = new Goal();
            const fb = newGoaldate.finishby;
            const finishDate = fb.toISOString().slice(0, 16)
  const phaseEmoji = Moon.lunarPhaseEmoji();
  const phase = Moon.lunarPhase(); const getJulianDate = (date = new Date()) => {
    const time = date.getTime();
    const tzoffset = date.getTimezoneOffset()

    return (time / 86400000) - (tzoffset / 1440) + 2440587.5;
  }
  res.render('goals/new', { title: 'Add Goal', errorMsg: '', phase, phaseEmoji, finishDate });
}

async function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    const goal = await Goal.create(req.body);
    res.redirect(`/goals/${goal._id}`);
  } catch (err) {
    console.log(err);
    const phaseEmoji = Moon.lunarPhaseEmoji();
    const phase = Moon.lunarPhase(); const getJulianDate = (date = new Date()) => {
      const time = date.getTime();
      const tzoffset = date.getTimezoneOffset()

      return (time / 86400000) - (tzoffset / 1440) + 2440587.5;
    }
    res.render('goals/new', { errorMsg: err.message }, phase, phaseEmoji);
  }
}