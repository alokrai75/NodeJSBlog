//posts.js
module.exports.getPosts = function getPosts(req, res){
    res.status(200).send(req.store.posts);
  }

module.exports.addPost = function addPost(req, res){
  var id = req.store.posts;
  var payload = req.body;
  console.log("Data:", payload);

  req.store.posts.push(payload);
  res.status(201).send({"id":id});
  }
  // Update existing post
module.exports.updatePost = function updatePost(req, res){
  var id = req.params.id;
  var payload = req.body;
  if(req.store.posts[id] == null){
      res.status(400).send('Topic not found');
      return;
  }
Object.assign(req.store.posts[id], payload);
res.status(201).send({"id":id});
}


// Update existing post
module.exports.deletePost = function deletePost(req, res){
var id = req.params.id;
if(req.store.posts[id] == null){
    res.status(400).send('Topic not found');
    return;
}
req.store.posts.splice(id, 1);
res.status(204).send();
}
