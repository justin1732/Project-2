
$(document).ready(function(){

    var userName;
    var password;
    
    $("#user-Signup").on("click", function(event){
        event.preventDefault();
        console.log("IS THIS CLICK OCCURING");
        var userName = $("#usernameInput").val().trim();
        var password = $("#passwordInput").val().trim();
        var user = {userName,password};
        console.log("user login: ", user);


        // axios.get('https://dummy.restapiexample.com/api/v1/employees')
        // .then((resp)=> {
        //     console.log("resp: ", resp)
        // })
        // .catch((err)=> {
        //     console.log("Err", err)
        // })
        // $.ajax("/api/signup", {
        //     method: 'POST', 
        //     headers:  {
        //         'Content-Type': 'application/json'
        //     }, 
        //     body: JSON.stringify(user) 
        // })
        // .then((resp) => {
        //     console.log("resp inssdfsfsd:L" , resp)
        // })
        // .catch((err) => {
        //     console.log("dadlfadjf err:", err)
        // })
        fetch("/api/signup", {
            method: 'post', 
            headers: {
                // 'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then((response) => {
            console.log("res: ", response)
            //return response.json()
            ;
        })
        // .then((data) => {
        //     console.log("data rom signup", data)
        //     // window.location.href ="/";
        // })
        .catch((err)=> {
            console.log("err", err);
        })
        window.location.href ="/"
       
    });
   


});




