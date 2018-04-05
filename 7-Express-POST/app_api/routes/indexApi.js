const express = require('express');
const router = express.Router();

const ctrlApiWorldCup = require('../controllers/ctrlApiWorldCup');
const ctrlApiGoldenball = require('../controllers/ctrlApiGoldenball');

// worldcup (list of world cup winners - countries)
router
    .route('/worldcup')
    .get(ctrlApiWorldCup.winnersList)
    .post(ctrlApiWorldCup.addWinner);

// goldenball (list of goldenball players)
router
    .route('/goldenball')
    .get(ctrlApiGoldenball.winnersList)
    .post(ctrlApiGoldenball.addWinner);

module.exports = router;


