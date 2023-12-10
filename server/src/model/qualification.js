const mongoose = require('mongoose')

const qualificationlSchema = new mongoose.Schema({
  
  requiredQualification: String,
  
  
}
);
const Qualification = mongoose.model('Qualification', qualificationlSchema);
module.exports = Qualification