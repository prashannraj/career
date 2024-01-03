const mongoose = require('mongoose')

const universitySchema = new mongoose.Schema({
  universityName: String // String is shorthand for {type: String}
   
}, {
  timestamps:true
});
const University = mongoose.model('university', universitySchema);
module.exports = University