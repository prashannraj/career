const mongoose = require('mongoose')

const applicationSchema = new mongoose.Schema({
  postName: String,
  requiredQualification:String,
  level: String,
  service: String,
  minPublishDate: String,
  sinPublishDate: String,
  douPublishDate: String,
  examFeeSingle: String,
  examFeeDouble: String,

  status: {
    type: String,
    enum : ["Pending","Hold", "Rejected"],
    default: 'Pending'
  },
},{
  timestamps:true
});
const User = mongoose.model('User', applicationSchema);
module.exports = User