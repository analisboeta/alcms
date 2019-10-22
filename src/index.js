const express = require('express');
const dbconnection = require('./util/database-connection');
const Post = require('./model/post');


const app = express();

//callback - quando get /posts -> devovle
app.get(`/posts`,function(request, response){

  console.log(request.query)
  Post.find(
    function(err,posts){
      if(err ==null){
        response.send(posts);
      }else{
        response.status(412);
        response.send(err);
      }
    }
  );





})


//aqui os endpoints ja devem estar configurados!
app.listen('80', function(){
  console.log('ESTOU VIVO NO EXPRESS');
})


