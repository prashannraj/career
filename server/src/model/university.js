const mongoose = require('mongoose')

const universitySchema = new mongoose.Schema({
  UniversityName: String,
 
}
);
const University = mongoose.model('University', universitySchema);
module.exports = University