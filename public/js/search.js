$(document).ready(function () {
    $("#search-btn").on("click", getTitle);

    function getTitle(event) {
        event.preventDefault();
        var title = $("#title-search").val();
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        console.log(title);
        fetch(`/3p/movie/title/${title}`, requestOptions)
            .then(result => result.json())
            .then(function (movie) {
                console.log(movie);
                let html =
`
<div id="content-goes-here">
            <p>
                Title: <span id="content-title">${movie.Title}</span>
            </p>
            <p>
                <img src="${movie.Poster}" alt="Movie Poster"/>    
            </p>
            <p>
                Release Year: <span id="content-year">${movie.Year}</span>
            </p>
            <p>
                Rating: <span id="content-rating">${movie.Rated}</span>
            </p>
            <p>
                Plot: <span id="content-plot">${movie.Plot}</span>
            </p>
            <p>
                Runtime: <span id="content-runtime">${movie.Runtime}</span>
            </p>
            <p>
                imdb Rating: <span id="content-runtime">${movie.imdbRating}</span>
            </p>
            
</div>
`
$('#content-goes-here').html(html)

// This function needs to:
    // 1) save movie to database by grabbing:
            // imdbID && title
            $("#add-btn").on("click", addTitle);
            function addTitle(event) {
                event.preventDefault();
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
                
                var urlencoded = new URLSearchParams();
                urlencoded.append("imdbID", `${movie.imdbID}`);
                urlencoded.append("title", `${movie.Title}`);
                
                var requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: urlencoded,
                  redirect: 'follow'
                };
                
                fetch("/api/movie/", requestOptions)
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
            
            }

    })
        .catch(error => console.log('error', error));
}


})


