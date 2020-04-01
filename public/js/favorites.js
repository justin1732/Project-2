$(document).ready(function(){
    var userName = sessionStorage.getItem("user");
    $(".ingredientsAdd").on("click", function(event){
        event.preventDefault();
        var ingredient = $(this).attr("data-ingredient");
        var userName = sessionStorage.getItem("user");
        console.log(ingredient, userName);
        fetch("/api/Ifavorite", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: ingredient, UserId: userName})
        });
    });

    $(".recipeAdd").on("click", function(event){
        event.preventDefault();
        var recipe = $(this).attr("data-recipe");
        var userName = sessionStorage.getItem("user");
        console.log(recipe, userName);
        fetch("/api/Rfavorite", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: recipe, UserId: userName})
        });
    });
//     function users(){
//         fetch("/api/users",{
//             method:"POST",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({UserId: userName})
// //         }).then((res) => {
// //             return res.json()
            
// //         })
// //         // .then((data)=>{
// //     //     var recipeItems = data
// //     //     res.render('index', {
// //     //         recipeItems: recipeItems
// //     //       })
// //     //     })    
// //         .then((data)=>{
// //             console.log("Recipes data: ", data);
// //             var ingredientItems = data;
// //         })
// //     .catch((err)=> {
// //         console.log("err", err);
// //     });
// // }
// // function users2 (){
// //     fetch("/api/users2",{
// //         method:"POST",
// //         headers: {
// //             'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify({UserId: userName})
// //     }).then((res) => {
// //         return res.json()
        
// //     })
// //     .then((data)=>{
// //         console.log("Ingredient data: ", data);
// //         var ingredientItems = data;
// //     })
// //     .catch((err)=> {
// //         console.log("err", err);
// //     });
// // }
// users();
// users2();
// });