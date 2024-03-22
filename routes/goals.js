var express = require('express');
var router = express.Router();
const goalsCtrl = require('../controllers/goals')
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.get('/', ensureLoggedIn, goalsCtrl.index);

router.get('/new', ensureLoggedIn, goalsCtrl.new);

router.get('/:id', ensureLoggedIn, goalsCtrl.show);

router.post('/', ensureLoggedIn, goalsCtrl.create);

router.get('/:id/edit', ensureLoggedIn, goalsCtrl.edit)

router.put('/:id', ensureLoggedIn, goalsCtrl.update)

router.delete('/:id', ensureLoggedIn, goalsCtrl.delete);
// move to done
router.get('/:id', ensureLoggedIn, goalsCtrl.done);




	
module.exports = router;
