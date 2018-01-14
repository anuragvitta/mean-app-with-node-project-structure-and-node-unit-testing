let express = require('express');
let app = express();
let bodyParser =require("body-parser");
let connectdb=require("H:/Student/src/config/config.js").connectdb;
let student=require("H:/Student/src/services/studentservice.js").student;
module.exports = function (app) {
    app.get("/",async function (req, res) {
try{
        let a1= await connectdb();
        let result=await student(a1);
        res.send(result);
    }
    catch(err)
    {
    	res.send(err);
    }
   });
};