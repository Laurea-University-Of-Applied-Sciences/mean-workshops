// Get access to the database connection
const mongoose = require('mongoose');

// Get access to the 'goldenBallWinner' model so we can interact with the GoldenBallWinners collection
const goldenBallModel = mongoose.model('goldenBallWinner');

const winnersList = function (req, res) {
    goldenBallModel.find({}, function(err, winners){
        if (err){
            res
                .status(404)
                .json(err);
        }
        else{
            res
                .status(200)
                .json(winners);
        }
    });};

const addWinner = function (req, res) {
    res
        .status(201)
        .json({"Add winner player" : "Work in progress"});
};

module.exports = {
    winnersList,
    addWinner
};