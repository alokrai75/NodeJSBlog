//index.js
const posts = require('./posts.js');
const comments = require('./comments.js');
const express = require('express');
const blogApp = new express();
const bodyParser = require('body-parser');


let store = {
 posts : [
      {
        "Topic":"Node JS for Beginers",
         "TopicURL":"http://google.com",
         "Body":"This article is all about Node js for beginnes. Expers are recommended to stay away from this topic.",
         "Comments": [
           {"text":"This is a really good begining"},
           {"text":"May be you should invite the experts as well for their comment"}
         ]
      }
 ]

};

blogApp.on('mount', function (parent) {
  console.log('Blog Mounted');
  //console.log(parent); // refers to the parent app

});

blogApp.use((req, res, next) =>{
  req.store = store;
  next();
});

blogApp.use(bodyParser.json());

module.exports.posts = posts;
module.exports.comments = comments;
module.exports.blogApp = blogApp;

blogApp.get('/posts', posts.getPosts);
blogApp.post('/post', posts.addPost);
blogApp.put('/post/:id', posts.updatePost);
blogApp.delete('/post/:id', posts.deletePost)

blogApp.get('/post/:id/comments', comments.getComments)
blogApp.post('/post/:id/comment', comments.addComment);
blogApp.put('/post/:id/comment/:commentId',comments.updateComment);
blogApp.delete('/post/:id/comment/:commentId',comments.deleteComment);
