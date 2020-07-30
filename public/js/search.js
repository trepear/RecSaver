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


<div class="card mb-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="${movie.Poster}" class="card-img" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
            <p>
                <span id="content-plot">${movie.Plot}</span>
            </p>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><span id="content-year">${movie.Year}</span></li>
                <li class="list-group-item"><span id="content-rating">${movie.Rated}</span></li>
                <li class="list-group-item"><span id="content-runtime">${movie.Runtime}</span></li>
                <li class="list-group-item"><span id="content-runtime">${movie.imdbRating}</span></li>
            </ul>
          </div>
        </div>
      </div>
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
                .then(result =>
                console.log(result),
                window.location.href="/list")
                .catch(error => console.log('error', error));
            
            }

    })
        .catch(error => console.log('error', error));
}


})


// <div class="card" style="width: 18rem;" id="content-goes-here">
// <img class="card-img-top" src="${movie.Poster}" alt=""/>
// <div class="card-body">
// <h5 id="content-title" class="card-title">${movie.Title}</h5>
// <p>
//     <span id="content-plot">${movie.Plot}</span>
// </p>
// </div>   
// <ul class="list-group list-group-flush">
//     <li class="list-group-item"><span id="content-year">${movie.Year}</span></li>
//     <li class="list-group-item"><span id="content-rating">${movie.Rated}</span></li>
//     <li class="list-group-item"><span id="content-runtime">${movie.Runtime}</span></li>
//     <li class="list-group-item"><span id="content-runtime">${movie.imdbRating}</span></li>
// </ul>
// </div>