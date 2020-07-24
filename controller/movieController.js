const axios = require('axios');

module.exports = {
    findMovie: function (req, res) {
        let title = req.params.title;
        // console.log(title);
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

    }
//     getMovieId: function (req, res) {
        
//         let movieId = req.params.movieId;
//         axios({
//             "method": "GET",
//             "url": "https://movie-database-imdb-alternative.p.rapidapi.com/",
//             "headers": {
//                 "content-type": "application/octet-stream",
//                 "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
//                 "x-rapidapi-key": "ab3f953ba0msh569df7421fa1728p1f81ddjsn5a5c3c773c9d",
//                 "useQueryString": true
//             }, "params": {
//                 "page": "1",
//                 "r": "json",
//                 "id": movieId,
//             }
//         })
//             .then((response) => {
//                 console.log(response.data);
//                 return res.json(response.data)
//             })
//             .catch((error) => {
//                 return res.json(error)
//             })

//     }
}

// save movie id to database
// call to third part api again using the movie id that we have
// return