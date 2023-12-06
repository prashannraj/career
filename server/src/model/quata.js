const mongoose = require('mongoose')

const quataSchema = new mongoose.Schema({
  quataName: String, // String is shorthand for {type: String}
      }
);
const Quata = mongoose.model('Quata', quataSchema);
module.exports = Quata