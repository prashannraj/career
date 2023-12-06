const mongoose = require('mongoose')

const levelSchema = new mongoose.Schema({
  postName: String, // String is shorthand for {type: String}
  requiredQualification: String,
  level: String,
  service: String,
}
);
const Level = mongoose.model('Level', levelSchema);
module.exports = Level