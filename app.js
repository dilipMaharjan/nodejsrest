var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');

//connect to mongoose

mongoose.connect('mongodb://localhost/nodejsrest');
var db=mongoose.connection;

//rest
app.get('/',function(req,res){
  res.send('hello');
});
app.listen(3000);
console.log("App State","Started");
