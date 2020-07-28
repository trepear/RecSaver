$(document).ready(function () {

    // Creating references 

    // var movieList = $("tbody");
    // var movieContainer = $(".movie-container");
    var title = $("#title-search").val();
    // $(document).on("submit", "#movie-form", movieFormSubmit);
    $("#search-btn").on("click", getTitle());




    // GET REQUEST
    // When user searches for a movie, imdb will need to populate the page with the:
    // 1) Summary
    // 2) Poster img.
    // 3) Rating
    // 4) Release yr.


    // function getTitle() {
    //     var title = $("#title-search").val();
    //     var settings = {
    //         "url": `localhost:8080/api/movie/${title}`,
    //         "method": "GET",
    //         "timeout": 0,
    //         "headers": {
    //           "Access-Control-Allow-Origin": ""
    //         },
    //       };

    //       $.ajax(settings).done(function (Resultresult) {
    //         console.log(Response);
    //       });
    // }
    function getTitle() {
        // var title = document.getElementById("title-search").value;
        // var title = $("#title-search").val();
        //var titleSearch = $("#title-search").val();
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/movie/pinocchio", requestOptions)
            // .then(result=> result.text())
            .then(result => result.json())
            .then(function (data) {
                let movies = data.result;
                return movies.map(function (movie) {
                    let div = createNode('div'),
                    p = createNode('p');
                    p.innerHTML = `${movie.Rated}`;
                    append(div, p);
                })
            })
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        function createNode(element) {
            return document.createElement(element)
        }

        function append(parent, el) {    
            return parent.appendChild(el);
        }

        // // Creating a div to hold the moviee
        // var movieDiv = $("<div class='movie'>");

        // // Storing the rating data
        // var rating = result.Rated;
        // console.log("RATING DATA: " + result.Rated);

        // // Creating an element to have the rating displayed
        // var pOne = $("<p>").text("Rating: " + rating);

        // // Displaying the rating
        // movieDiv.append(pOne);

        // // Storing the release year
        // var released = result.Year;

        // // Creating an element to hold the release year
        // var pTwo = $("<p>").text("Released: " + released);

        // // Displaying the release year
        // movieDiv.append(pTwo);

        // // Storing the plot
        // var plot = result.Plot;

        // // Creating an element to hold the plot
        // var pThree = $("<p>").text("Plot: " + plot);

        // // Appending the plot
        // movieDiv.append(pThree);

        // // Retrieving the URL for the image
        // var imgURL = result.Poster;

        // // Creating an element to hold the image
        // var image = $("<img>").attr("src", imgURL);

        // // Appending the image
        // movieDiv.append(image);

        // // Putting the entire movie above the previous movies
        // $("#movies-view").prepend(movieDiv);

    }
})
// When user clicks "add" after reviewing the movie info, the movie will be appended to their "movie-list"
        // addEventListener(onClick)? 

// console.log("GET TITLE FUNCtION: " + getTitle);}
