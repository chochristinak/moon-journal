const Goal = require('../models/goal');
const { Moon } = require('lunarphase-js')
const JournalPrompt = require('../models/journalPrompt')

module.imports = {
    Moon,
    JournalPrompt
}
module.exports = {
    create,
    delete: deleteJournalEntry,
    edit,
    update
};

async function edit(req, res) {
    const goal = await Goal.findOne({ 'journalEntry._id': req.params.id },
        function (err, goal) {
            const journal = goal.journalEntry.id(req.params.id);
            res.render('journals/edit', { journal });
        });
}

async function update(req, res) {

    const goal = await Goal.findOne({ 'journalEntry._id': req.params.id, 'journalEntry.user': req.user._id })
    let journalUpdate = goal.journalEntry.id(req.params.id)
    if (journalUpdate) {
        journalUpdate.content = req.body.content
    } try {
        await goal.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/goals/${goal._id}`);
}

async function deleteJournalEntry(req, res) {
    const goal = await Goal.findOne({ 'journalEntry._id': req.params.id, 'journalEntry.user': req.user._id });
    if (!goal) return res.redirect('/goals');
    goal.journalEntry.remove(req.params.id);
    await goal.save();
    res.redirect(`/goals/${goal._id}`);
}

async function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;


    const goal = await Goal.findById(req.params.id);

    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;


    goal.journalEntry.push(req.body);
    try {
        await goal.save();
    } catch (err) {
        console.log(err);
    }



    res.redirect(`/goals/${goal._id}`);
}