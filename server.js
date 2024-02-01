require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const {connectToDB, isConnected} = require('./db.js');

//Connect to MongoDB
connectToDB();

app.get('/', (req, res)=>{
    let content = `Hi There!, Database Status: ${isConnected() ? "CONNECTED" : "DISCONNECTED"}`
    res.send(content)
});

app.get('/ping', (req, res)=>{
    res.send({"message" : "pong"})
})

app.listen(port, ()=>{
    console.log(`🚀 server running on PORT: ${port}`)
})