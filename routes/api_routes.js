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
// GET route for retrieving a single list-item (by :id)
router.route('/api/movie/:title')
    .get(movieController.findMovie);

// WORKS
// GET route for retriving all notes that are connected to movies
router.get("/api/movie", function(req, res) {
    db.movieList.findAll()
    .then(function(dbmovieList){
        res.json(dbmovieList)
    })
    .catch(function(err) {
        res.json(err)
    })
})
// ****** WORK IN PROGRESS ******
// GET route for retrieving a single note connected to a specific movie
//   router.get("api/movie/:movieId", function(req, res){
//     db.movieList.findOne({
//         where: {
//             movieId: req.params.movieId
//         }
//     })
//     .then(function(dbmovieList){
//         res.json(dbmovieList)
    
//     }) 
// });

// WORKS
// POST route for saving a new note attached to movieList-item
router.post("/api/movie", function(req, res) {
    console.log(req.body);
    db.movieList.create({
      title: req.body.title,
      body: req.body.body,
      watched: req.body.watched
    })
    .then(function(dbmovieList) {
        res.json(dbmovieList);
    });
});

// DELETE route for deleting list-items
// router.route('/api/movie/:title', function(req, res) {
//     db.movieList.destroy({
//         where: {
//             title: req.params.title
//         }
//         .then(function(dbmovieList) {
//             res.json(dbmovieList);
//         })
// });
// })

// router.delete('/api/movie')
//     .destroy(movieController.findMovie);

// router.delete("/api/movie/:title", function(req,res) {
//     db.movieList.destroy({
//         where: {
//             title: req.params.title
//         }
//         .then(function(dbmovieList){
//             res.json(dbmovieList);
//         })
//     //     .then(results => res.json(results))
//     // });
// });

// WORKS 
// DELETE route for deleting notes from list-items 
router.delete('/api/movie/:title', function(req, res) {
    db.movieList.destroy({
        where: {
            title: req.params.title
    }})
        .then(function(dbmovieList) {
            res.json(dbmovieList);
        }) .catch(function(err) {
            res.json(err)
        })
    });


// PUT route for updating notes 
router.put("/api/movie", function(req,res) {
    db.movieList.update({
        title: req.body.title,
        body: req.body.body,
        watched: req.body.watched
    }, {
        where: {
            id: req.body.id
        }
    }).then(function(dbmovieList){
        res.json(dbmovieList);
    });
});
// movie list table with title, boolean value about whether its watched, and a notes field to add comments 
// on to many relationship with user and movies (add user ID_)

module.exports = router;

