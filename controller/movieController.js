const axios = require('axios');

module.exports = {
    // this gets us a movie and show a bunch of different info about it
    findMovie: function (req, res) {
        let title = req.params.title;
        axios({
            "method": "GET",
            "url": "https://movie-database-imdb-alternative.p.rapidapi.com/",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
                "x-rapidapi-key": "ab3f953ba0msh569df7421fa1728p1f81ddjsn5a5c3c773c9d",
                "useQueryString": true
            }, "params": {
                "page": "1",
                "r": "json",
                "t": title,
            }
        })
            .then((response) => {
                console.log(response.data);
                return res.json(response.data)
            })
            .catch((error) => {
                return res.json(error)
            })

    },
    // this will get us the movieId so we can connect it to "movieId" in our movie.js model
    getMovieId: function (req, res) {
        let imdbID = req.params.imdbID;
        console.log("MOVIE ID" + imdbID);
        axios({
            "method": "GET",
            "url": "https://movie-database-imdb-alternative.p.rapidapi.com/",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
                "x-rapidapi-key": "ab3f953ba0msh569df7421fa1728p1f81ddjsn5a5c3c773c9d",
                "useQueryString": true
            }, "params": {
                "page": "1",
                "r": "json",
                "i": imdbID,
            }
        })
            .then((response) => {
                console.log(response.data);
                return res.json(response.data)
            })
            .catch((error) => {
                return res.json(error)
            })

    }
}
