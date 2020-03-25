require("dotenv").config();
var request = require ("request");
var axios = require ("axios");
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");

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

request(queryUrl, function (error, response) {

if (!error && response.statusCode === 200) {
console.log(response);

}});
}

function findfood() {
    var Ingredient = "orange";
    var queryUrl = "http://www.recipepuppy.com/api/?i=" + Ingredient;
    
    request(queryUrl, function (error, response) {
    
    if (!error && response.statusCode === 200) {
    console.log(response);
    
    }});
    }


//Keys and AXIOS for Nutrionix API
axios.get('https://trackapi.nutritionix.com/v2/search/instant?query=apple', {
 headers: {
   'x-app-id': '1b56da4f',
   'x-app-key': '1280ff1c8a5c5c57611dce7ae53c9e09'

 },
}
).then (function (response) {
       console.log (response);
   })
   .catch (function (error){
       console.log (error);
   });

//Call to the PuppyRecipe API
   findfood();
module.exports = app;
