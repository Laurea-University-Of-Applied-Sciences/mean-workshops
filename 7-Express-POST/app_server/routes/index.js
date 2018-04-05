const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain'); // Controller for the Home page
const ctrlWorldCup = require('../controllers/ctrlWorldCup'); // ... for the list of World Cup winners (countries)
const ctrlGoldenBall = require('../controllers/ctrlGoldenBall'); // ... for the the list of Golden ball winners (players)

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/worldcup', ctrlWorldCup.winnerList);  // List of World Cup winners (countries)
router.get('/goldenball', ctrlGoldenBall.winnerList);  // List of Golden ball winners (players)

router
    .route('/worldcup/add')
    .get(ctrlWorldCup.showForm)   // Display the form
    .post(ctrlWorldCup.addData);  // Get form data and make the API call

module.exports = router;
