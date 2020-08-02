const express = require('express');
const app = express();

app.set('view engine','ejs');
app.use('/assets', express.static('assets'))

app.get("/login", function(req,res){
    res.render('Login')
})

app.get("/loginreq", function(req,res){
    console.log(req.query)
    res.render('Login')
})

app.listen(4000);