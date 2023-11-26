const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
  postName: String, // String is shorthand for {type: String}
  requiredQualification: String,
  level: String,
  service: String,
  image: String,
  examFee: String,
});
const Vacancy = mongoose.model('Vacancy', jobSchema);
module.exports = Vacancy