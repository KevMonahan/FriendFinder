var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var friends = require("app/data/friends")
var app = express();

var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())




app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.listen(PORT, function (req,res) {
    console.log("You are connected on http://localhost:" + PORT);
})