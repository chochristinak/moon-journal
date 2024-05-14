const express = require('express');
const router = express.Router();
const gainsCtrl = require('../controllers/gains');



router.get('/', gainsCtrl.show);


module.exports = router