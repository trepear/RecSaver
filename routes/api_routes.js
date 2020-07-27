// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// Dependencies
// =============================================================
const movieController = require('../controller/movieController.js')
const router = require('express').Router()
// Requiring our models
var db = require("../models");

// WORKS
// GET route for retrieving a single list-item (by :title)
router.route('/api/movie/:title')
    .get(movieController.findMovie);

// WORKS
// GET route for retrieving an :id from IMDB
router.route('/api/notes/:imdbID')
    .get(movieController.getMovieId);

// WORKS
// GET route for connecting a searched movie to its specific movieId
router.get("/api/notes/:imdbID", function(req, res) {
    db.movieList.findAll({
        where: {
            imdbID: req.params.imdbID,
            title: req.params.title   
        }})
    .then(function(dbmovieList) {
        res.json(dbmovieList);
    })
    .catch(function(err) {
        res.json(err)
    })
}) 

// WORKS
// GET route for retriving all notes that are connected to movies
router.get("/api/movie", function(req, res) {
    db.Note.findAll({
        include: [db.movieList]
    })
    .then(function(dbmovieList){
        res.json(dbmovieList)
    })
    .catch(function(err) {
        res.json(err)
    })
})

// WORKS
// POST route for saving a movie to the database
router.post("/api/movie/", function(req,res) {
    db.movieList.create({
        imdbID: req.body.imdbID,
        title: req.body.title,
    })
    .then(function(dbmovieList) {
        res.json(dbmovieList);
    })
    .catch(function(err) {
        res.json(err)
    })
})

// POST route for saving a new note attached to movieList-item
router.post("/api/notes/", function(req, res) {
    console.log(req.body);
    db.Note.create({
      title: req.body.title,
      body: req.body.body,
      movieListId: req.body.movieListId
    })
    .then(function(dbNote) {
        res.json(dbNote);
    })
    .catch(function(err) {
        res.json(err)
    })
});

// DELETE route for deleting a specific note associated with a movie (this deletes entire list-item)
router.delete("/api/notes/:movieListId", function(req, res) {
    db.Note.destroy({
      where: {
        movieListId: req.params.movieListId
      }
    }).then(function(dbNote) {
      res.json(dbNote);
    }) .catch(function(err) {
        res.json(err)
    }) 
  });


// PUT route for updating notes 
router.put("/api/movie/:id", function(req,res) {
    db.Note.update({
        body: req.body.body,
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(dbNote){
        res.json(dbNote);
    });
});


module.exports = router;

