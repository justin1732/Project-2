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
    $("#search").on("click", function(event){
        event.preventDefault();
        console.log("IS THIS CLICK OCCURING");
       
        var ingredient = $("#searchInput").val().trim();
        // var food = {findfood};
        
        var queryUrl = "http://www.recipepuppy.com/api/?i=" + ingredient;
      
        fetch(queryUrl, {
            mode: 'no-cors'
        }).then((resp)=> {
            
            console.log("data from recipepuppy", resp)
            return resp.json()
        })
        .then((data)=> {
            // var food = JSON.parse(data.body).results;
            console.log("data is: ", data);
            // data.newProp = "adfda"
            // return data
        })
        .catch((err) => {
            console.log("THE ERR IS: ", err);
        })
        
          
        // fetch("/api/recipe", {
        //     method: 'GET', 
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(food)
        // })
        // .then((res) => {
        //     return res.json()
        // })
        // .then((data) => {
        //     console.log("data rom recipe", data)
        //     // window.location.href ="/recipe";
        // })
        // .catch((err)=> {
        //     console.log("err", err);
        // });
    });
    });
