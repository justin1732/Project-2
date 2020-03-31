$(document).ready(function(){
    
    $("#isearch").on("click", function(event){
        event.preventDefault();
        // console.log("IS THIS CLICK OCCURING");
       
        var ingredient = $("#searchInput").val().trim();
        // console.log()
        // console.log("window location", window.location)
        window.location.href= `/ingredients/${ingredient}`;
        
    });


    

    });