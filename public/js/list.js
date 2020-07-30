$(document).ready(function(){
// UPDATE ROUTE - marks note as completed + allows user to update an existing note


const updateBody = (id) => {
    event.preventDefault();
    return $.ajax({
        url: "/api/movie/" + id,
        method: "PUT"
    })
}
// const deleteListItem = (id) => {
//     event.preventDefault();
//     return $.ajax({
//         url: "/api/movie/" + id,
//         method: "DELETE"
//     })
// }

// GET ROUTE - gets all saved movies
const getMovies = () => {
        return $.ajax({
          url: "/api/movie",
          method: "GET",
        }).then(function(movie) {
       
            for (let i = 0; i < movie.length; i++) {
                let title = movie[i].title;
                let body = movie[i].body;
                let id = movie[i].id;
                
                var movieTitleDiv = $("<div>").attr("class",".card-title");
                var movieNoteDiv = $("<div>").attr("class",".card-body");

                var deleteBtn = $("<button>").attr({"class":"delete","id":"delete-"+id,"value":id}).text("Delete a movie");
                $(movieTitleDiv).append(deleteBtn)

                var updateBtn = $("<button>").attr({"class":"update","id":"update-"+id,"value":id}).text("Add or update a note");
                $(movieTitleDiv).append(updateBtn)
                // create text tag and give id:id -- text tag needs different id than the delete button -- concat id with delete button
                // add text box to save-titles div // grab value for id // concat 
                var completeBtn = $("<button>").attr("class","complete").text("Mark as watched");
                $(movieTitleDiv).append(completeBtn)

                if (body === null){
                    var titleText = $("<h3>").text(title);
                    $(movieTitleDiv).append(titleText);
                    $("#saved-titles").append(movieTitleDiv);
                     
                } else {
                    var titleText = $("<h3>").text(title);
                    var bodyText = $("<p>").text(body);
                    
                   $(movieTitleDiv).append(titleText); 
                   $(movieNoteDiv).append(bodyText); 
                   
                   $(movieTitleDiv).append(movieNoteDiv);
                   $("#saved-titles").append(movieTitleDiv);
                }
                
            }
            // DELETE ROUTE
            $('#saved-titles').on('click', '.delete', function() {
                    $.ajax({ cache: false,
                        url: "/api/movie/" + this.value,
                        method: "DELETE"
                    }).done(function () {
                    }).fail(function () {
                       
                });
            })

            $('#saved-titles').on('click', '.update', function() {
            //     $.ajax({ cache: false,
            //         url: "/api/movie/" + this.value,
            //         method: "PUT"
            //     }).done(function (data) {
            //         console.log("DELETED NOTE YAYYY :", id);
            //     }).fail(function (jqXHR, textStatus) {
            //         console.log("WRONG :", id);
            // });

            
            alert("UPDATING!!!");
        })
        })
        
        
            // $(".delete").on("click", deleteListItem, function(event) {
            //     event.preventDefault();
            //     title = "";
            //     id = "";
            //     body = "";
            // })
                
        
         
         
        
    }
    getMovies();

})
    // DELETE ROUTE - deletes entire list item
    // function deleteListItem(event) {
    //     event.stopPropagation();
    //     var id = $(this).data("id");
    //     $.ajax({
    //         url: "/api/movie/" + id,
    //         method: "DELETE"
    // });
   



 // ADD NOTE
        //   $(".add").on("click", addNote,);
          // DELETE NOTE
        //   $(".delete").on("click", deleteListItem);
          // MARK NOTE AS COMPLETE
        //   $(".update").on("click", updateNote); 





        

