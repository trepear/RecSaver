 // GET REQUEST
    // When user clicks "add to watchlist", they will see their saved movies
    // the title of whatever movie they were vieewing gets saved as the title of the note in their list
$(document).ready(function(){
// this function calls all movies from movieList db
    const getMovies = () => {
        return $.ajax({
          url: "/api/movie",
          method: "GET",
        }).then(function(data) {
            for (let i = 0; i < data.length; i++) {
                let title = data[i].title;
                var text = $("<p>").text(title);
                $("#saved-titles").append(text);

                
            }
        })
   
        // this function renders the movies from the database onto the webpage
      
    

  


    
    
    
    // POST
    // user will be able to add a note to the movie (i.e.: "this was recommended by Jessica")

    // DELETE
    // user will be able to delete a note (by :id)

    // PUT
    // user will be able to update their list-item
        // 1) mark as "complete"
        // 2) updating a note
        // 3) assign a rating ***EXTRA***

    //     $("#addNote-btn").on("click", addNote);
    // function addNote() {
        
}
getMovies();
})