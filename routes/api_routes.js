// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// Dependencies
// =============================================================
const movieController = require('../controller/movieController.js')
// Requiring our models
var db = require("../models");

module.exports = function(app) {
    app.get('/api/movie/:title', movieController.findMovie) 

// GET route for getting all of the list-items

// GET route for retrieving a single list-item (by :id)

// POST route for saving a new list-item

// POST route for saving a new note attached to list-item

// DELETE route for deleting list-items

// DELETE route for deleting notes from list-items

// PUT route for updating list-items

// PUT route for updating notes 
}


