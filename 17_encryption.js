const express = require('express');
const app = express()
const mongoose = require('mongoose');
let User = require('./usermodel')
var bodyparser = require('body-parser');
var jsonparser = bodyparser.json();
var crypto = require('crypto');
var key = 'password';
var algo = 'aes256';

mongoose.connect('mongodb+srv://ankit:mypassword@cluster0.ecku3.mongodb.net/tutorial?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.warn("db connected");
})

app.get('/', function (req, res) {
    User.find().then((data) => {
        res.status(200).json(data)
    })
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
        res.status(201).json(result)
    }).catch((err)=>console.warn(err))

})

app.listen(4000)