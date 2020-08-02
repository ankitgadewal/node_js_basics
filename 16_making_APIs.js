const express = require('express');
const app = express()
const mongoose = require('mongoose');
let User = require('./usermodel')
var bodyparser = require('body-parser');
var jsonparser = bodyparser.json();

mongoose.connect('mongodb+srv://ankit:mypassword@cluster0.ecku3.mongodb.net/tutorial?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// making get api
app.get('/', function (req, res) {
    User.find().then((data) => {
        res.status(200).json(data)
    })
})

//making post apis
app.post('/user', jsonparser, function (req, res) {
    // res.end(req.body.name);
    const data = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        lastname: req.body.lastname,
        address: req.body.address
    })
    data.save().then((result)=>{
        res.status(201).json(result);
    })
    .catch((error)=>console.warn(error))
})

//making delete apis
app.delete('/user/:id',function(req, res){
    User.deleteOne({_id:req.params.id}).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{console.warn(err)})
})

//making put apis
app.put('/user/:id', jsonparser ,function(req, res){
    User.updateOne({
        _id:req.params.id},
        { $set: {
            name: req.body.name,
            lastname: req.body.lastname,
            address: req.body.address,
            }}
    ).then((result)=>{
    res.status(200).json(result)
    }).catch((err)=>{console.warn(err)})
})

//Making Search Apis
app.get("/search/:name", function(req, res){
    var regex = new RegExp(req.params.name, 'i');
    User.find({name:regex}).then((result)=>{
        res.status(200).json(result);
    })
})

app.listen(4000)