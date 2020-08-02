const express = require('express');
const app = express();
app.get('/', function(req,res){
    res.send("Hello Express I am Ankit this is a get request");
})

//calling a Html file... using __dirname+'filename'
app.get('/about', function(req,res){
    res.sendfile(__dirname+"/demo.html");
})

app.get('/contact', function(req,res){
    res.send("this is contact page");
})
app.post('/', function(req,res){
    res.send("This is Home page for Post request");
})
app.put('/', function(req,res){
    res.send("this is Home page for put requests");
})
app.delete('/', function(req,res){
    res.send("this is Home page for delete page");
})
app.listen(4000);