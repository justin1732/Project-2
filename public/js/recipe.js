$(document).ready(function(){
    
    $("#rsearch").on("click", function(event){
        event.preventDefault();
        // console.log("IS THIS CLICK OCCURING");
       
        var ingredient = $("#searchInput").val().trim();
        // console.log()
        // console.log("window location", window.location)
        window.location.href= `/recipe/${ingredient}`
        
        
    });


    // $("#recipeAddBtn").on("click", function(event) {
    //     event.preventDefault();
    //     var recipeAdded = this.attr("data-recipe");
    //     console.log("Recipe Added to Favorites.", recipeAdded);
    // })

    });
