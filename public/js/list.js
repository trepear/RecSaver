$(document).ready(function(){

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

            // add text box to save-titles div // grab value for id // concat 
                var completeBtn = $("<button>").attr("class","complete").text("Mark as watched");
                $(movieTitleDiv).append(completeBtn)

                if (body === null || ""){
                    var titleText = $("<h3>").text(title);
                    $(movieTitleDiv).append(titleText);
                    $("#saved-titles").append(movieTitleDiv);
                     
                } else {
                    var titleText = $("<h3>").text(title);
                    var bodyText = $("<input>").val(body);
                    console.log("in loop",bodyText.val());
                    
                   $(movieTitleDiv).append(titleText); 
                   $("#saved-titles").append(bodyText); 
                   
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
                        window.location.href="/list"
                    }).fail(function () {            
                }); 
                
            })
            // PUT ROUTE
            let data = {"body":`${body}`}
            console.log("BODY " ,bodyText);
            $('#saved-titles').on('click', '.update', function() {
                $.ajax({ cache: false,
                    url: "/api/movie/" + this.value,
                    method: "PUT",
                    data: JSON.stringify(data),
                    headers: {
                        'x-auth-token': localStorage.accessToken,
                        "Content-Type": "application/json"
                    },
                    dataType: 'json'
                }).done(function (){
                    // window.location.href="/list"
                }).fail(function (ms) {
                }).always(function (msg) {
                    console.log('ALWAYS');
                });

        })
        
        })
        
        
           
    }
    getMovies();

})
    
   





        

