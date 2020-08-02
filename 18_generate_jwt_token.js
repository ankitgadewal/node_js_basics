const express = require('express');
const app = express()
const mongoose = require('mongoose');
let User = require('./usermodel')
var bodyparser = require('body-parser');
var jsonparser = bodyparser.json();
var crypto = require('crypto');
var key = 'password';
var algo = 'aes256';
const jwt= require('jsonwebtoken');
secret_key = "$#123mysecretkey#$dfifrnjanhcdby"

mongoose.connect('mongodb+srv://ankit:mypassword@cluster0.ecku3.mongodb.net/tutorial?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.warn("db connected");
})

app.post('/register', jsonparser, function (req, res) {
    var cipher = crypto.createCipher(algo, key);
    var encrypted = cipher.update(req.body.password, 'utf8', 'hex')
        + cipher.final('hex');
    const data = new User({
        _id: mongoose.Types.ObjectId(),
        username: req.body.username,
        password: encrypted,
    })
    data.save().then((result)=>{
        jwt.sign({result},secret_key,{expiresIn:'100000s'},(err,token)=>{
            res.status(201).json({token})
        })
    }).catch((err)=>console.warn(err))
})

app.listen(4000)