const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  fullName: String,
  phoneNumber: String, // String is shorthand for {type: String}
  email: String,
  dateOfBirth: String,
  address: String,
  role: {
    type:String,
    enum:['choose','candidate', 'officer'],
    default:'choose'
  },
  password: String
});
const User = mongoose.model('User', userSchema);
module.exports = User