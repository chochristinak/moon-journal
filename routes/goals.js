var express = require('express');
var router = express.Router();
const goalsCtrl = require('../controllers/goals')
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All paths already include /goals



// GET /goals
router.get('/', ensureLoggedIn, goalsCtrl.index);
// GET /goals/new
router.get('/new', ensureLoggedIn, goalsCtrl.new);
// GET /goals/:id (show functionality) MUST be below new route
router.get('/:id', ensureLoggedIn, goalsCtrl.show);
// POST /goals
router.post('/', ensureLoggedIn, goalsCtrl.create);

router.get('/:id/edit', ensureLoggedIn, goalsCtrl.edit)

router.put('/:id', ensureLoggedIn, goalsCtrl.update)

router.delete('/:id', ensureLoggedIn, goalsCtrl.delete);
// move to done
router.get('/:id', ensureLoggedIn, goalsCtrl.done);




	
module.exports = router;
