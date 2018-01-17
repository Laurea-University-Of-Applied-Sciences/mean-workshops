var express = require('express');
var router = express.Router();

var ctrlFootball = require('../controllers/ctrlFootball');

/* GET home page. */
router.get('/', ctrlFootball.winnerlist);

module.exports = router;
