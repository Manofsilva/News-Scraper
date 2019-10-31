// import express so that we can setup our Node express server
var express = require("express");
var exphbs = require("express-handlebars");
// import morgan logger so that w ecan log all API netweok operations during development
// intrnal development toll that logs server side functions
var logger = require("morgan");
// import mongoose so we can connect to our databse stroed in MongoDB and so we can execute all of our CRUD operations
var mongoose = require("mongoose");
// import cheerio so that we have JQuery like experience when traversing DOM for data we wish to extract
var cheerio = require("cheerio");
// import axios so we can make a http cal to the website we are scraping
var axios = require('axios');
var router = express.Router();

// import the models so that we have access to the models when running CRUD operations
var Note = require("../models/Note.js");
var Article = require("../models/Article.js");

// declare the port number so that our machines know where to locate our app on localhost
var PORT = 3000;

// Instantiate an instance of an express application
var app = express();

// MIDDLEWARE FUNCTIONS
// Use morgan logger for logging requests. ("dev") will log all API Network Operations
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder (this includes client side JS and CSS files), express knows to look in the public directory serving static files to clientside.
app.use(express.static("public"));

// connect to the local mongo database and if it hasn't been created already, it will create a database named noteScraperDB
mongoose.connect("mongodb://localhost/noteScraperDB", {useNewUrlParser: true});

// store the mongoose connection in a variable
const dbConnection = mongoose.connection;

// listening for a databasee connection error
dbConnection.on("error", console.error.bind(console, "connection error:"));

// listening for a database connection success
dbConnection.once('open', () => {
    console.log('Connected to Mongoose!');
    // if I wanted to seed the db on load (e.g. runn a bulkinsert)
});

app.listen(PORT, function() {
    console.log("App running on PORT " + PORT);
});


router.get("/", function(req, res) {
    res.render("index");
});