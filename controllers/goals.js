const Goal = require("../models/goal");
const { Moon } = require("lunarphase-js");
const ideas = require("../data/ideas.js");

module.imports = { Moon };

module.exports = {
  index,
  show,
  new: newGoal,
  create,
  edit: editGoal,
  update: updateGoal,
  delete: deleteGoal,
  markDone,
};

async function markDone(req, res) {
  try {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
      return res.status(404).send("Goal not found");
    }
    if (!goal.accomplished) {
      goal.accomplished = true;
      goal.doneList.push(goal._id);
      await goal.save();
    }
    res.redirect("/gains"); 
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
}

async function deleteGoal(req, res) {
  try {
    await Goal.findByIdAndDelete(req.params.id);
    res.redirect("/goals");
  } catch (err) {
    console.log(err);
    req.redirect("/goals");
  }
}

async function updateGoal(req, res) {
  try {
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedGoal) {
      return res.redirect("/goals");
    }
    res.redirect(`/goals/${updatedGoal._id}`);
  } catch (err) {
    console.error(err);
    res.redirect("/goals");
  }
}

async function editGoal(req, res) {
  const goal = await Goal.findById(req.params.id);
  res.render("goals/edit", { title: "Edit Goal", goal });
}

async function index(req, res) {
  const goals = await Goal.find({});
  const phaseEmoji = Moon.lunarPhaseEmoji();
  const phase = Moon.lunarPhase();
  const getJulianDate = (date = new Date()) => {
    const time = date.getTime();
    const tzoffset = date.getTimezoneOffset();

    return time / 86400000 - tzoffset / 1440 + 2440587.5;
  };
  res.render("goals/index", { title: "Moon Goals", goals, phaseEmoji, phase });
}

async function show(req, res) {
  const goal = await Goal.findById(req.params.id).populate("journalEntry");
  const phaseEmoji = Moon.lunarPhaseEmoji();
  const phase = Moon.lunarPhase();
  const journalIdeas = ideas[phase.toUpperCase()];
  const getJulianDate = (date = new Date()) => {
    const time = date.getTime();
    const tzoffset = date.getTimezoneOffset();
    return time / 86400000 - tzoffset / 1440 + 2440587.5;
  };
  res.render("goals/show", {
    title: "Goal Details",
    goal,
    phase,
    phaseEmoji,
    journalIdeas,
  });
}

function newGoal(req, res) {
  const newGoaldate = new Goal();
  const fb = newGoaldate.finishby;
  const finishDate = fb.toISOString().slice(0, 16);
  const phaseEmoji = Moon.lunarPhaseEmoji();
  const phase = Moon.lunarPhase();
  const getJulianDate = (date = new Date()) => {
    const time = date.getTime();
    const tzoffset = date.getTimezoneOffset();

    return time / 86400000 - tzoffset / 1440 + 2440587.5;
  };
  res.render("goals/new", {
    title: "Add Goal",
    errorMsg: "",
    phase,
    phaseEmoji,
    finishDate,
  });
}

async function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  try {
    const goal = await Goal.create(req.body);
    res.redirect(`/goals/${goal._id}`);
  } catch (err) {
    console.log(err);
    const phaseEmoji = Moon.lunarPhaseEmoji();
    const phase = Moon.lunarPhase();
    const getJulianDate = (date = new Date()) => {
      const time = date.getTime();
      const tzoffset = date.getTimezoneOffset();

      return time / 86400000 - tzoffset / 1440 + 2440587.5;
    };
    res.render("goals/new", { errorMsg: err.message }, phase, phaseEmoji);
  }
}
