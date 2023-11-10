const mongoose=require('mongoose')
const { Schema } = mongoose;

const users = new Schema({
 firstname: String,
 middlename: String, // String is shorthand for {type: String}
  lastname: String,
  email: String,
  address:String,
 phonenumber:String,
 password:String,

  
});

const User = mongoose.model('User', users);
module.exports = User