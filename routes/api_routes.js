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
router.route('/3p/movie/title/:title')
    .get(movieController.findMovie);

// WORKS
// GET route for retrieving an :id from IMDB
// router.route('/3p/movie/imdbID/:imdbID')
//     .get(movieController.getMovieId);

// GET route for retriving the entire movieList
router.get("/api/movie", function(req, res) {
    db.movieList.findAll({
    })
    .then(function(dbmovieList){    `                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           `
        res.json(dbmovieList)
    })
    .catch(function(err) {
        res.json(err)
    })
})

// POST route for saving a movie to the database
router.post("/api/movie/", function(req,res) {
    console.log(req.body)
    db.movieList.create({
        imdbID: req.body.imdbID,
        title: req.body.title,
        body: req.body.body
    })
    .then(function(dbmovieList) {
        res.json(dbmovieList);
    })
    .catch(function(err) {
        res.json(err)
    })
})

// DELETE route for deleting a specific note associated with a movie 
router.delete("/api/movie/:id", function(req, res) {
    db.movieList.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbNote) {                                              
      res.json(dbNote);
    }) .catch(function(err) {                   
        res.json(err)
    }) 
  });

router.put("/api/movie/:id", function(req,res) {
    db.movieList.update({
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

