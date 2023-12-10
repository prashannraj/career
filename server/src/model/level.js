const mongoose = require('mongoose')

const levelSchema = new mongoose.Schema({
  level: String,
 
}
);
const Level = mongoose.model('Level', levelSchema);
module.exports = Level