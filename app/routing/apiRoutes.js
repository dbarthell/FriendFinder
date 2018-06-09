// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friends = require("/Users/dbarthell/FriendFinder/app/data/friends.js");

// Sets up the Express App
// =============================================================
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//send list of friends
app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

// Create New Characters - takes in JSON input
app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newFriend = req.body;
    friends.push(newFriend);
    console.log(req);
    var newScore = req.body.score;
    var doppleganger = friends[0];

    // write loop that compares existing scores to newScore

    return res.json(doppleganger);

});

module.exports = app;