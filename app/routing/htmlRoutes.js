// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  res.sendFile("/Users/dbarthell/FriendFinder/app/public/home.html");
});

app.get("/survey", function (req, res) {
  res.sendFile("/Users/dbarthell/FriendFinder/app/public/survey.html");
});

module.exports = app;