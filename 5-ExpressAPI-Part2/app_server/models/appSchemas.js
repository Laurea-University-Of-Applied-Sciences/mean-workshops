const mongoose = require('mongoose');

// Schemas define the document structure used in the app
const footballSchema = new mongoose.Schema({year:String, team:String});
const goldenBallSchema = new mongoose.Schema({year:String, player:String, team:String});

/* Models will contain compiled instances of the schemas
 * so they can be used in the app later on
 */
mongoose.model('football', footballSchema);
mongoose.model('goldenball', goldenBallSchema);

