const axios = require('axios');

module.exports = {
    findMovie: function (req, res) {
        axios.get({

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
                "t": req.params.title,
            }
        })
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
                console.log(error)
        })

    }
}