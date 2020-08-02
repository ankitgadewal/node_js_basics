const express = require('express');
const app = express()
const mongoose = require('mongoose');
let User = require('./usermodel')
var bodyparser = require('body-parser');
var jsonparser = bodyparser.json();
var crypto = require('crypto');
var key = 'password';
var algo = 'aes256';
const jwt = require('jsonwebtoken');
secret_key = "$#123mysecretkey#$dfifrnjanhcdby"

mongoose.connect('mongodb+srv://ankit:mypassword@cluster0.ecku3.mongodb.net/tutorial?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.warn("db connected");
})

app.post('/login', jsonparser, function (req, res) {
    User.findOne({ username: req.body.username }).then((data) => {
        var decipher = crypto.createDecipher(algo, key);
        var decrypted = decipher.update(data.password, 'hex', 'utf8') + decipher.final('utf8');
        if (decrypted == req.body.password) {
            jwt.sign({ data }, secret_key, { expiresIn: '100000s' }, (err, token) => {
                res.status(200).json({ token })
            })
        }
        console.warn('decrypted', decrypted);
    })
})

app.listen(4000)