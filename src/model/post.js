const mongoose = require('mongoose');


var postSchema = new mongoose.Schema({
    postType: String,
    title: String,
    content: String,
    imageList: [String],
    date: Date,
    tagList: [String],
    author: String
});

// Post = nome da collection que vai ser criada no mongoDB
var Post = mongoose.model('Post', postSchema);

//node.js -> averiguar!
module.exports = Post;