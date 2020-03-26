// var mysql = require("mysql2");
// var query = connection.query(
//     "INSERT INTO login SET?",
//     {
//       userName: something
//     },
//     function(err,res) {
//       if(err) throw err;
//     }
//   );
var userName;
var password;
$("#user-Signup").on("click", function(){
    var userName = $(this).attr("aria-label", "userName").val().trim();
    var password = $(this).attr("aria-label", "password").val().trim();
    var login = {userName:userName,password:password};
    console.log(userName);
    $.ajax({
        method: "post",
        url: "api/signup/",
        data: login
    }).then(function() {
        location.replace("/");
    });


});




