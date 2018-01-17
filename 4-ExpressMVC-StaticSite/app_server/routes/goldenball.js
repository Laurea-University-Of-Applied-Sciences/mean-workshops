var express = require('express');
var router = express.Router();

var ctrlGoldenBall = require('../controllers/ctrlGoldenBall');

/* GET home page. */
router.get('/', ctrlGoldenBall.winnerlist);

module.exports = router;
