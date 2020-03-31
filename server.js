require("dotenv").config();
var request = require("request");
var axios = require("axios");
var express = require("express");
var passport = require("passport");
var exphbs = require("express-handlebars");
var db = require("./models");
var mysql = require("mysql2");
var jsdom = require("jsdom");
var canvas = require("canvas");
var session = require("express-session");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var app = express();
var PORT = process.env.PORT || 3000;

/**
 * 
 *  SETTING UP MIDDLE WHERE FOR BODY OBJECT ENCODING
 */
// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

/**
 * 
 *   SETTING UP PASSPORT 
 * 
 * 
 * 
 * 
 */
app.use(session({ secret: "miw", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  // simple, static login strategy based on the username
  // "baduser" will be rejected and invalid username, everyone else has a password of "password"
  
  function(username, password, done) {
    console.log("In local strategy", username, password)
    db.User.findOne({
      where: {
        userName: username, 
        password: password
      }
  }).then(function(data){
    // When a user tries to sign in this code runs
    // If we're trying to log in with an invalide username
    console.log("in strat", data)
    console.log("Found user in data base", data.userName, data.password)
    var pword = data.password;
    var uname = data.userName;
    var uid = data.id; 
    console.log("INT LOCAL STRATEGY", username, password)

    if (!username || username !== uname) {
      return done(null, false, {
        message: "Incorrect username."
      });
    }
    // If we're using an invalid password
    else if (password != pword) {
      return done(null, false, {
        message: "Incorrect password."
      });
    }
    // successful login, return the user -- which consists of an object holding the username
    let user = {
        userName: uname, 
        uid: uid
    };
    ///JSON.stringify({userName: uname, id: uid});  
    console.log("user: ", user)
    return done(null, user);
    }) 
    
  }
));

passport.serializeUser(function(user, callback) {
  callback(null, user);
});

// the deserialized user is an object with a username property -- which is availabe as request.user
passport.deserializeUser(function(user, callback) {
  callback(null, {user});
});


/**
 * 
 *  SET UP HANDLE BARS
 */
// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
console.log("in server.js")


require("./routes/apiLogin")(app, passport);
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
require("./routes/apifavorites")(app);

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

  request(queryUrl, function(error, data) {
    if (!error && data.statusCode === 200) {
      // console.log(JSON.parse(data.body).results)
      var food = JSON.parse(data.body).results;
      // console.log (food.body.results);
      for (var i = 0; i < food.length; i++) {
        console.log(i);
        console.log("food name:" + food[i].title);
        console.log("Weblink: " + food[i].href);
        console.log("Ingredients: " + food[i].ingredients);
        console.log("Food Image: " + food[i].thumbnail);
      //   let recipeDiv = $('<div id="recipe">');
      //   let foodpic = food[i].thumbnail;
      //   let foodimg =$("<img>").attr("src", foodpic);
      //   recipeDiv.append(foodimg, $("<br>"));
      //   $("#recipeWindow").html(`<iframe src="` + food[i].href + `" height=450 width=800></iframe>`);
       }
     
      // $(document).ready(function () {
      //   var thisVideo = localStorage.getItem("youtubeLink")
      //   // var myVideos = JSON.parse(localStorage.getItem("rawgGamePage")) || [];
      //   var myVideos = JSON.parse(localStorage.getItem("myVideos")) || [];
      //   if (!myVideos.includes(thisVideo)) {
      //       myVideos.push(thisVideo);
      //   }
      //   localStorage.setItem("myVideos", JSON.stringify(myVideos));
    
    
      //   // for loop length of my games
      //   // pull myingredients[i]
      //   // query myingredient[i]
      //   // append query to html
    
    
      //   for (let i = 0; i < myVideos.length; i++) {
      //       let saveVideos = myVideos[i];
    
    
      //       let youtubeURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" + saveVideos + "&key=AIzaSyCPy54AlgJ3V_7vhdgJwHdRVkPHm06fHU0";
    
      //       $.ajax({
      //           url: youtubeURL,
      //           method: "GET"
      //       }).then(function (response) {
      //           console.log("EweTewb response: ", response);
      //           let items = response.items;
      //           console.log("video searches:", items);
      //           for (let i = 0; i < items.length; i++) {
      //               let videoDiv = $('<div id="videoVideo">')
      //               let EweTewb = items[0].id.videoId
      //               let EweTewbLink = "https://www.youtube.com/video/" + EweTewb;
      //               // console.log("items: ", items[i].snippet.title);
      //               let videoImage = $("<img>").attr("src", items[0].snippet.thumbnails.medium.url)
      //               videoDiv.append(videoImage, $("<br>"))
      //               let videoName = $('<a href="' + EweTewbLink + '" target="_blank">' + items[0].snippet.title + '</a>')
      //               videoDiv.append(videoName)
      //               // console.log("THIS THING HERE IS:", videoName);
      //               // console.log("PICTURE THIS:", videoImage)
      //               $("#videotest").append(videoDiv)
      //           }
    
      //       })
    
      //   }
    

    }
  });
}

// Keys and AXIOS for Nutrionix API
// let sample = orange;
// let NutrixURl = https://trackapi.nutritionix.com/v2/search/instant?query='
// axios.get(' + sample, {
//  headers: {
//    'x-app-id': '1b56da4f',
//    'x-app-key': '1280ff1c8a5c5c57611dce7ae53c9e09'

//  },
// }
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

// findfood();
//module.exports = login_signup;
module.exports = app;

// $(document).ready("click", "#natesButton" , function(event) {
//   event.preventDefault
//   $("#recipeWindow").html("<p>Yup it's a scope problem alright.</p");
// });
