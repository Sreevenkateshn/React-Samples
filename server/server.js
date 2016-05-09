var express = require("express");
var path = require("path");

var app = express();
app.use(express.static(path.join(__dirname,"../app/dist")));
app.listen(8071,function(){
    console.log("Started listening on port", 8071);
})