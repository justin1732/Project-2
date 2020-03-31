$(document).ready(function(){
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
});