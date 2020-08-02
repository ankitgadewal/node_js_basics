const express = require('express');
const app = express()
const mongoose = require('mongoose');
let User = require('./usermodel')

mongoose.connect('mongodb+srv://ankit:mypassword@cluster0.ecku3.mongodb.net/tutorial?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
).then(() => {
    console.warn("db Connected");
});

//get user data from database
User.find({}, function (err, users) {
    if (err) console.warn(err); 
    console.warn(users);
})

