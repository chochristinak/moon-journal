const express = require('express');
const router = express.Router();
const gainsCtrl = require('../controllers/gains');
const ensureLoggedIn = require("../config/ensureLoggedIn");



router.get('/', ensureLoggedIn, gainsCtrl.show);
router.delete('/done/:id', ensureLoggedIn, gainsCtrl.deleteDoneGoal);


module.exports = router