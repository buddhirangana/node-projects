const express = require("express");

const app = express();

//app.METHOD(PATH, HANDLER)

app.get("/a/cool/route/path", function(req, res){
    res.send("You accessed the path /a/cool/route/path");
});

app.listen(3000);