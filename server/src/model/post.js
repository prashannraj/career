const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  postName: String, // String is shorthand for {type: String}
}
);
const Post = mongoose.model('Post', postSchema);
module.exports = Post