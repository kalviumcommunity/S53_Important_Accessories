const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send("Home Page")
})

app.get('/ping', (req, res)=>{
    res.send({"message" : "pong"})
})

app.listen(port, ()=>{
    console.log(`🚀 server running on PORT: ${port}`)
})