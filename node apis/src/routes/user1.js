let express = require('express');
let bodyParser =require("body-parser");
let connectdb=require("H:/Student/src/config/config.js").connectdb;
let student=require("H:/Student/src/services/insertstudent.js").student;
let app= express();

module.exports= function (app) {

    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    app.post("/addstudent",async function (req, res) {
        let a=req.body;
try{

        let a1= await connectdb();
        let result=await student(a1,a);
        res.send(result);
    }
    catch(err)
    {
    	res.send(err);
    }
   });
};


