var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');

//connect to mongoose

mongoose.connect('mongodb://localhost/nodejsrest');
var db=mongoose.connection;

//rest
app.get('/',function(req,res){
  res.send('Please use /api/books or /api/genre');
});
app.listen(3000);
console.log("App State","Started");
