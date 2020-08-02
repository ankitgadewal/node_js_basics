const express = require('express');
const app = express()
const mongoose = require('mongoose');
let User = require('./usermodel')

mongoose.connect('mongodb+srv://ankit:mypassword@cluster0.ecku3.mongodb.net/tutorial?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const data= new User({
    _id:new mongoose.Types.ObjectId(),
    name:"dummy",
    lastname:"user",
    address:"USA"
});
data.save().then((result)=>{
    console.warn(result)
})
.catch(err=>console.warn(err))