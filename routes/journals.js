const express = require('express');
const router = express.Router();
const journalsCtrl = require('../controllers/journals');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /goals/:id/journals (create new journal entry for goal)
router.post('/goals/:id/journals', ensureLoggedIn, journalsCtrl.create);
// DELETE /journal entries
router.delete('/journals/:id', ensureLoggedIn, journalsCtrl.delete);

// edit a journal entry for specfic goal
router.get('/journals/:id/edit', ensureLoggedIn, journalsCtrl.edit)

// Update a journal entry
router.put('/journals/:id', ensureLoggedIn, journalsCtrl.update);


module.exports = router;