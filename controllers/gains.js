const Goal = require("../models/goal");

module.exports = {
  show: showGains,
  deleteDoneGoal
};

async function showGains(req, res) {
  try {
    const doneGoals = await Goal.find({ accomplished: true }).populate(
      "doneList"
    );
    res.render("gains/show", {
      title: "Celebrate Your Achievements",
      doneGoals,
    });
  } catch (error) {
    console.error("Error retrieving done goals:", error);
    res.sendStatus(500);
  }
}

async function deleteDoneGoal(req, res) {
    try {
      const doneGoalId = req.params.id; 
      const doneGoal = await Goal.findByIdAndDelete(doneGoalId); 
      if (!doneGoal) {
        return res.sendStatus(404); 
      }
      res.redirect('/gains'); 
    } catch (err) {
      console.error(err);
      res.sendStatus(500); 
    }
  }
