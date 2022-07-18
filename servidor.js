const express = require("express");
const path = require("path");
const app = express();

app.get("/",(req,res) =>{
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000,()=>{
    console.log("Server runing on port", 3000);
});