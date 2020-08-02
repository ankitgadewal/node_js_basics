const express = require('express');
const app = express();

const checkUrl = function(req, res, next){
    console.warn("current route is ", req.originalUrl)
    next()
}
// checkUrl works as a middleware 
app.use(checkUrl);
app.get('/', function(req,res){
    res.send("Hello Express I am Ankit this is a get request");
})
app.get('/about', function(req,res){
    res.send("this is about page");
})

app.listen(4000)