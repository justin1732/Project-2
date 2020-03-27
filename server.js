require("dotenv").config();
var request = require ("request");
var axios = require ("axios");
var express = require("express");
var passport = require("passport");
var exphbs = require("express-handlebars");
var db = require("./models");
var mysql = require("mysql2");
var jsdom = require ('jsdom');
$ = require("jquery") (new jsdom.JSDOM().window);


var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
require("./routes/apiLogin")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

//Function for displaying information from the Recipe Puppy API
function findfood() {
var Ingredient = "orange";
var queryUrl = "http://www.recipepuppy.com/api/?i=" + Ingredient;

request(queryUrl, function (error, data) {

if (!error && data.statusCode === 200) {


    var food = data.body.results;
// console.log (food.body.results);
    for (var i = 0; i < food.length; i++){
      console.log (i);
      console.log ("food name:" + food[i].title);
      console.log ("Weblink: " + food[i].href);
      console.log ("Ingredients: " + food[i].ingredients);
      console.log ("Food Image: " + food[i].thumbnail)
    }
    
    }});
    }


//Keys and AXIOS for Nutrionix API
// axios.get('https://trackapi.nutritionix.com/v2/search/instant?query=apple', {
//  headers: {
//    'x-app-id': '1b56da4f',
//    'x-app-key': '1280ff1c8a5c5c57611dce7ae53c9e09'

//  },
// }
// ).then (function (response) {
//        console.log (response);
//    })
//    .catch (function (error){
//        console.log (error);
//    });

//Call to the PuppyRecipe API



// $("#user-Login").on("click", function(){

// });

//   models.Pantry.build({
//     food: "something"
//   }).save()
//   .then(anotherTask => {
//     console.log("it worked");
//   })
//   .catch(error =>{
//     console.log("something Broke");
//   });
  // var query = db.sequelize.query(
  //   "INSERT INTO Pantry SET ?",
  //   {
  //     food: userName
  //   },
  //   function(err,res) {
  //     if(err) throw err;

//   );

   findfood();
//module.exports = login_signup;
module.exports = app;
