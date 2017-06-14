// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Requiring our Note and Article models
var Article = require("./models/article.js");

// Our scraping tools
var request = require("request");
var cheerio = require("cheerio");

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Initialize Express
var app = express();

// Morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static("public"));

// DB Setup
mongoose.connect("mongodb://localhost/nytreact");
var db = mongoose.connection;

// Err Check
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Routes


// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
