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
require("./routes/apifavorites")(app);
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


module.exports = app;

// $(document).ready("click", "#natesButton" , function(event) {
//   event.preventDefault
//   $("#recipeWindow").html("<p>Yup it's a scope problem alright.</p");
// });
