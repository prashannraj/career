const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
  serviceName: String, // String is shorthand for {type: String}
      }
);
const Service = mongoose.model('Service', serviceSchema);
module.exports = Service