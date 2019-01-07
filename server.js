//server.js
// commands for testing
//get all blogs
// curl -X GET "http://localhost:3030/posts
//add new blog
//curl -X POST "http://localhost:3030/post" -H "Content-Type: application/json" -i -d '{"Topic":"New Posts about JS", "TopicURL": "http://abc.com", "Body":"This is post body"}'
// update existing post
//curl -X PUT "http://localhost:3030/post/0" -H "Content-Type: application/json" -i -d '{"Topic":"Topic Number TWO", "TopicURL": "http://abc.com", "Body":"This is post body"}'
//Delete existing post
//curl -X DELETE "http://localhost:3030/post/1" -i

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const logger = require('errorHandler');
const routes = require('./routes');
const app = new express();

app.use(bodyParser.json());
app.use(morgan('dev'));


app.use('/', routes.blogApp);

app.listen(3030);
console.log('Server started');
