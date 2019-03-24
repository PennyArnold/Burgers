//Requirements
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

//variable to run express
var app = express();

//set up port to make Heroku-friendly
var PORT = process.env.PORT || 3000;

//static route connection
app.use(express.static("public"));

//connecting body-parser elements (url and json)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//setting up handlbars
app.engine("handlebars", exphbs({  defaultLayout: "main" }));
app.set("view engine", "handlebars");

//routes
var routes = require("./controllers/burgers-controller.js");
//  app.use(routes);

//commands the port to listen
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost: " + PORT)
});

