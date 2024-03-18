const express = require('express');
const router = express.Router();
const journalPromptsCtrl = require('../controllers/journalPrompts');



router.get('/', journalPromptsCtrl.show);


module.exports = router