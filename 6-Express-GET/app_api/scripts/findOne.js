const mongoose = require('mongoose');
const footballSchema = new mongoose.Schema({year:String, team:String});

// Get access to the 'football' model so we can interact with the Football collection
const footballModel = mongoose.model('football', footballSchema);

// find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
footballModel.findOne({ 'year': '1990' }, 'year team', function (err, winner) {
    if (err) return handleError(err);

    // Print info about the winner
    console.log('In %s the winner was %s', winner.year, winner.team);
});