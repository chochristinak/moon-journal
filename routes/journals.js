const express = require('express');
const router = express.Router();
const journalsCtrl = require('../controllers/journals');
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.post('/goals/:id/journals', ensureLoggedIn, journalsCtrl.create);

router.delete('/journals/:id', ensureLoggedIn, journalsCtrl.delete);


router.get('/journals/:id/edit', ensureLoggedIn, journalsCtrl.edit)


router.put('/journals/:id', ensureLoggedIn, journalsCtrl.update);


module.exports = router;