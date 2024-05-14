const Goal = require("../models/goal");

module.exports = {
  show: showGains,
};

async function showGains(req, res) {
  try {
    const goal = await Goal.findById(req.params.id);
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
