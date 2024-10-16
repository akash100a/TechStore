const express = require('express');
const appServeer = express();

appServeer.get('/', (req, res) => {
    res.send("Hellow");
})

appServeer.listen(4000,()=>{
    console.log("server is working");
    
})