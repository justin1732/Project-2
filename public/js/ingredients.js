$(document).ready(function(){
    // function findfood(callback) {
    //     var Ingredient = ingredient;
    //     var queryUrl = "http://www.recipepuppy.com/api/?i=" + Ingredient;
      
    //     request(queryUrl, function(error, data) {
    //       if (!error && data.statusCode === 200) {
    //         var food = JSON.parse(data.body).results;
          
    //          callback(food);
      
    //         }
    //       });
    //     }
    $("#isearch").on("click", function(event){
        event.preventDefault();
        // console.log("IS THIS CLICK OCCURING");
       
        var ingredient = $("#searchInput").val().trim();
        // console.log()
        // console.log("window location", window.location)
        window.location.href= `/ingredients/${ingredient}`;
        
    });
    });