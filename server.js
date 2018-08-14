var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var friends = require("app/data/friends")
var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);




app.listen(PORT, function (req, res) {
    console.log("You are connected on http://localhost:" + PORT);
})