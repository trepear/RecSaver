// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
const logger = require('morgan');
const apiRoutes = require('./routes/api_routes');
const htmlRoutes = require('./routes/html_routes');
const path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"))

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
app.use(apiRoutes)
// require("./routes/api_routes.js")(app);
app.use(htmlRoutes)
// require("./routes/html_routes.js")(app);
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/start.html"));
});

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

