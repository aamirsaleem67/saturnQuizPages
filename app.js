var express = require('express');
var path =require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'css')));

app.use(express.static(path.join(__dirname, 'js')));

app.use(express.static(path.join(__dirname, 'images')));


app.use(function(req,res){

    res.sendFile(path.join(__dirname,'index.html'));
});
app.listen(3000,function(){


    console.log("Server listening on port 3000");
});