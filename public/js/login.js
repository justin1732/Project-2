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
            sessionStorage.setItem("user",data.uid);
            // user = data.uid
            window.location.href = "/";
            
        })
        .catch((err)=> {
            console.log("err", err);
        })
       
    });
    $("#user-Sign").on("click", function(){
        window.location.href ="/signup";
        
    });



});




