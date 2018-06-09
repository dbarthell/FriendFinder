var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Import routes and give the server access to them.
var apiRoutes = require("/Users/dbarthell/FriendFinder/app/routing/apiRoutes.js");
var htmlRoutes = require("/Users/dbarthell/FriendFinder/app/routing/htmlRoutes.js");

app.use(apiRoutes);
app.use(htmlRoutes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});