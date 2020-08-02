// we have to use body parser to parse post requests
const express = require('express');
const app = express();

var bodyparser = require('body-parser');
var encoder = bodyparser.urlencoded();

app.set('view engine','ejs');
app.use('/assets', express.static('assets'))

app.get("/login", function(req,res){
    res.render('Login')
})

//2nd parameter in node works as a middleware
app.post("/loginreq",encoder, function(req,res){
    console.log(req.body)
    res.render('Login')
})

app.listen(4000);