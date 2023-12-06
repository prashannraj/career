const mongoose = require('mongoose')

const qualificationlSchema = new mongoose.Schema({
  postName: String, // String is shorthand for {type: String}
  requiredQualification: String,
  level: String,
  service: String,
}
);
const Qualification = mongoose.model('Qualification', qualificationlSchema);
module.exports = Qualification