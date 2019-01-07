//comments.js
// commands to test
//get all comment of a post
//curl -X GET http://localhost:3030/post/0/comments
// add a comment to an existing posts
//curl -X POST "http://localhost:3030/post/1/comment" -H "Content-Type: application/json" -i -d '{"text":"Keep going"}'
// update a comment on existing post
//curl -X PUT "http://localhost:3030/post/1/comment/0" -H "Content-Type: application/json" -i -d '{"text":"Nice topic of discussion"}'
//delete a comment from a post
// curl -X DELETE "http://localhost:3030/post/0/comment/1" -i


// get all comments of a post
module.exports.getComments = function getComments(req, res){
    var id = req.params.id;
    res.status(200).send(req.store.posts[id].Comments);
  }
 // Add comments to existing posts
  module.exports.addComment = function addComment(req, res){
    var id = req.params.id;

    var payload = {
      "text": req.body.text
    }
    console.log("Data:", payload);
    if(!req.store.posts[id]){
      res.status(400).send('Topic not found');
      return;
    }
    if(req.store.posts[id].Comments == null){
      req.store.posts[id].Comments = [];
    }

    req.store.posts[id].Comments.push(payload);
    res.status(201).send({"id":id});
  }

// Update existing comment
module.exports.updateComment = function updateComment(req, res){
  var id = req.params.id;
  var commentId = req.params.commentId;

  var payload = {
    "text": req.body.text
  }
  console.log("Data:", payload);
  if(!req.store.posts[id]){
    res.status(400).send('Topic not found');
    return;
  }
  if(req.store.posts[id].Comments == null){
    res.status(400).send('Topic not found');
    return;
  }
  Object.assign(req.store.posts[id].Comments[commentId], payload);
  res.status(201).send({"id":id, "commentId":commentId});
}

// Delete existing comment
module.exports.deleteComment = function deleteComment(req, res){
  var id = req.params.id;
  var commentId = req.params.commentId;

  if(!req.store.posts[id]){
    res.status(400).send('Topic not found');
    return;
  }
  if(req.store.posts[id].Comments == null){
    res.status(400).send('Topic not found');
    return;
  }
  req.store.posts[id].Comments.splice(commentId, 1);
  res.status(204).send();
}
