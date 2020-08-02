const express = require('express');
const app = express();

app.set('view engine','ejs');
app.use('/assets', express.static('assets'))

app.get("/profile/:name", function(req,res){
    console.warn(req.params.name)
    data={email:"test@gmail.com", name:"ankit", skills:['node', 'angular', 'react']}
    res.render('Profile', {name:req.params.name, data:data})
})

app.get("/login", function(req,res){
    res.render('Login')
})

app.listen(4000);