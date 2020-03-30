$(document).ready(function(){
    var userName;
    var password;
    
    $("#user-Login").on("click", function(event){
        event.preventDefault();
        console.log("IS THIS CLICK OCCURING");
        var userName = $("#usernameInput").val().trim();
        var password = $("#passwordInput").val().trim();
        var login = {username:userName,password:password};
        console.log("user login: ", login);
        fetch("/api/login", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login)
        })
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log("data rom login", data)
            window.location.href ="/";
        })
        .catch((err)=> {
            console.log("err", err);
        })
       
    });
    // $("#user-Signup").on("click", function(){
    //     var userName = $(this).attr("userName").val().trim();
    //     var password = $(this).attr("password").val().trim();
    //     var login = {username:userName,password:password};
    //     console.log(userName);
    //     $.ajax({
    //         method: "post",
    //         url: "api/signup",
    //         data: login
    //     }).then(function() {
    //         location.replace("/");
    //     });
    
    
    // });



});




