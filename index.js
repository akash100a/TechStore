const express = require('express');
const appServeer = express();

appServeer.get('/', (req, res) => {
    res.send("Hellow");
})
appServeer.get('/read', (req, res) => {
    res.send("Hellow Reading");
})

appServeer.listen(4000,()=>{
    console.log("server is working");
    
})