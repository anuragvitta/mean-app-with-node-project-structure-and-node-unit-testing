let express = require('express');
require('dotenv').config();
let bodyParser =require("body-parser");
let MongoClient = require('mongodb').MongoClient;
let app = express();
require("./src/routes/user.js")(app);
require("./src/routes/user1.js")(app);
module.exports=app;
if(!module.parent) {
 app.listen(3000,() => console.log('Example app listening on port 3000!'));
}