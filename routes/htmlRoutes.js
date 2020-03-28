var db = require("../models");
var express = require ("express");
var router = express.Router();
var request = require ("request");

// router.get('/', function (req, res, next){
//   request ({
//  url: 'https://trackapi.nutritionix.com/v2/search/instant?query=' + 'orange',
//  headers: {
//    'x-app-id': '1b56da4f',
//    'x-app-key': '1280ff1c8a5c5c57611dce7ae53c9e09',

//  }, function (error, response, body){
//    if (!error && response.statuscode ===200){
//      console.log(body);
//      res.json(body.self.food_name);

//    }else
//    res.json(error);
//  }
//   });
//    });;



  //  app.post ("index.js", function (req, res){
  //   appendchild.res.json(body.self.food_name).('<div>"bob"</div>')
  //  })

module.exports = function(app) {
  // Load index page
  app.get("/", passportAuthenticationMiddleware, function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {

      res.render('index', {
        user: req.user,
      })
    });
  });

  app.get("/login", function(req, res) {
    res.render('login', {});
  });



  app.get("/api/food/:ingredient", function(req, res) {
    // db.Example.findAll({}).then(function(dbExamples) {
    //   res.json(dbExamples);
    // });
  

    findfood((foodObj)=> {
        console.log("The food object from root endpoint", foodObj)
        res.json({
          foodItems: foodObj
        });
      }, req.params.ingredient)
  });
//Function for displaying information from the Recipe Puppy API
function findfood(callback) {
  //Need to somehow make this User Input from DBA or by searching
  var Ingredient = "orange";
  
  var queryUrl = "http://www.recipepuppy.com/api/?i=" + Ingredient;

  request(queryUrl, function(error, data) {
    if (!error && data.statusCode === 200) {
      var food = JSON.parse(data.body).results;
    
       callback(food);

      }
    });
  }




  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {

      res.render("example", {
        example: dbExamples
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
// module.exports= router;


const passportAuthenticationMiddleware = (request, response, next) => {
  if (request.user) {
    return next();
  }
  // If the user isn't logged in, redirect them to the login page
  return response.redirect("/login");
}
