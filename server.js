var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friends = require("app/data/friends")
var app = express();

var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

var questions = [
    "Generally you enjoy shooter games", "It's enjoyable to you to play horror games", "Your favorite games to play tend to fall in the MOBA category",
    "Nothing excites you more than to grind away on an MMORPG", "You enjoy being the tank in team games", "You enjoy taking on the role of the healer", 
    "You enjoy being the main source of Damage in a game, AKA the DPSer", "You like to hang back and play mages", "Do you tend to rage quit when a game is going badly?", 
    "You blame your mistakes on lag, the game, and your teammates"
]


app.listen(PORT, function (req,res) {
    console.log("You are connected on http://localhost:" + PORT);
})