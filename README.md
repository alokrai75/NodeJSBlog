# Blog application using Node.js Express

## A sample in memory Blog application using Node.js Express web framework exposed as Restful API.


Main file for this project is server.js which has dependency on express framework.
Server.js file instantiate the express application and listen at port 3030. The routing responsibility is handed over to sub app "blogApp".
Once control goes to blogApp it calls appropriate handler for different routes as per project rubric.  

** Steps: ** (assuming npm is already installed)
```
git clone https://github.com/alokrai75/NodeJSBlog.git
cd NodeJSBlog
npm install
node server.js
```   
Once the installation is complete you can use below commands from terminal using curl, alternate option is to use postman or similar tool.

```
//get all blogs try below command or copy and paste the URL in browser
 curl -X GET "http://localhost:3030/posts
//add new blog
curl -X POST "http://localhost:3030/post" -H "Content-Type: application/json" -i -d '{"Topic":"New Posts about JS", "TopicURL": "http://abc.com", "Body":"This is post body"}'
// update existing post
curl -X PUT "http://localhost:3030/post/0" -H "Content-Type: application/json" -i -d '{"Topic":"Topic Number TWO", "TopicURL": "http://abc.com", "Body":"This is post body"}'
//Delete existing post
//curl -X DELETE "http://localhost:3030/post/1" -i
```

Now that posts created. To add, update or delete comment in an existing post try below commands from terminal.
In below commands number after "/post/" represents post identifier and number after "/comment/" represent comment identifier.
```
//get all comment of a post or copy and paste the URL in browser
curl -X GET http://localhost:3030/post/0/comments
// add a comment to an existing posts
curl -X POST "http://localhost:3030/post/1/comment" -H "Content-Type: application/json" -i -d '{"text":"Keep going"}'
// update a comment on existing post
curl -X PUT "http://localhost:3030/post/1/comment/0" -H "Content-Type: application/json" -i -d '{"text":"Nice topic of discussion"}'
//delete a comment from a post
curl -X DELETE "http://localhost:3030/post/0/comment/1" -i


```
