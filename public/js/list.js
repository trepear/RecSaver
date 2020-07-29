 // GET REQUEST
    // When user clicks "add to watchlist", they will see their saved movies
    // the title of whatever movie they were vieewing gets saved as the title of the note in their list
$(document).ready(function(){
// this function calls all movies from movieList db




// POST ROUTE - creates note 
const addNote = (note) => {
    event.preventDefault();
    return $.ajax({
        url: "api/notes",
        data: note,
        method: "POST"
    })
}

// DELETE ROUTE - deletes entire list item
const deleteListItem = (movieListId) => {
    return $.ajax({
        url: "api/notes" + movieListId,
        method: "DELETE"
    })
}


// UPDATE ROUTE - marks note as completed + allows user to update an existing note
const updateNote = (id) => {
    event.preventDefault();
    return $.ajax({
        url: "/api/notes" + id,
        method: "PUT"
    })
}


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
            const getNotes = () => {
                // event.preventDefault();
                return $.ajax({
                    url: "api/notes",
                    method: "GET"
                }).then(function(note){
                    console.log(note);
                    for (let i = 0; i < note.length; i++) {
                        let newNote = note[i].body;
                        // let newNoteId = data[i].imdbID;
                        // if (newNote && newNoteId ==== data[i] {
                            
                        // }
                        var noteText = $("<p>").text(newNote);
                        $("#saved-notes").append(noteText);
            
            
                        var addNoteBtn = $("<button>").attr("id", "add").text("Add a note");
                            noteText.append(addNoteBtn);
                            console.log(addNoteBtn);
            
                            var deleteNoteBtn = $("<br>" + "<button>").attr("id", "delete").text("Delete movie");
                            noteText.append(deleteNoteBtn);
            
                            var updateNoteBtn = $("<br>" + "<button>").attr("id", "update").text("Mark as watched!");
                            noteText.append(updateNoteBtn);
            
                            var noteBody = $("<br>" + "<textarea>");
                            noteText.append(noteBody);
                            
                    
                
                            
                            // EVENT LISTENERS FOR BUTTONS
            
                            // ADD NOTE
                            $("#add").on("click", addNote);
                            // DELETE NOTE
                            $("#delete").on("click", deleteListItem);
                            // MARK NOTE AS COMPLETE
                            $("#update").on("click", updateNote);  
                    }
                })
            }
            getNotes();
        })
    }
getMovies();
})


        
        

  

    

   

    

  


    
    
    
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
        

