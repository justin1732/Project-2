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
    $("#rsearch").on("click", function(event){
        event.preventDefault();
        // console.log("IS THIS CLICK OCCURING");
       
        var ingredient = $("#searchInput").val().trim();
        // console.log()
        // console.log("window location", window.location)
        window.location.href= `/recipe/${ingredient}`
        
        
        // fetch(`/recipe/${ingredient}`)
        // .then((res) => {
        //     return res.json()
        // })
        // .then((data) => {
        //     console.log("data rom recipe", data)
        //     // let recipeList = data.foodItems
        //     // for (let i = 0; i < recipeList.length; i++) {
                
                
        //     // }
        // })
        // .catch((err)=> {
        //     console.log("err", err);
        // });
        
          
        
    });
    });
