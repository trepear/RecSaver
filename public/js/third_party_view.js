const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

console.log(jsdom);
//var movie = jsdom.getElementById("movie-search").value;

//router.get("/api/movie/:title", (req, res) => {
    
//})
axios({
    "method":"GET",
    "url":"https://movie-database-imdb-alternative.p.rapidapi.com/",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"movie-database-imdb-alternative.p.rapidapi.com",
    "x-rapidapi-key":"ab3f953ba0msh569df7421fa1728p1f81ddjsn5a5c3c773c9d",
    "useQueryString":true
    },"params":{
    "page":"1",
    "r":"json",
    "t": movie //req.params.title,
  }
    })
    .then((response)=>{
      console.log(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })

// When user hits the search-btn
// $("#search-btn").on("click", function(event) {
//   event.preventDefault();

//   // Save the book they typed into the book-search input
//   var movie = $("#movie-search").val().trim();

//   var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=" + movie,
//     "method": "GET",
//     "headers": {
//       "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
//       "x-rapidapi-key": "ab3f953ba0msh569df7421fa1728p1f81ddjsn5a5c3c773c9d"
//     }
//   }
//   $.ajax(settings).done(function (response) {
//     console.log(response.data);
//   });

//     console.log(data);
//     // Call our renderBooks function to add our books to the page
//     renderBooks(data);

//   });


      
