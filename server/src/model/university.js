const mongoose = require('mongoose')

const universitySchema = new mongoose.Schema({
  universityName: String,
 
});
const University = mongoose.model('University', universitySchema);
module.exports = University