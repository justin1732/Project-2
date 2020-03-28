var db = require("../models");
const request = require("request");

module.exports = function(app) {
  // Get all examples
  app.get("/api/food/:ingredient", passportAuthenticationMiddleware,function(req, res) {
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

  // Create a new example
  app.post("/api/examples", passportAuthenticationMiddleware,function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", passportAuthenticationMiddleware,function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

};


function findfood(callback, ingredient) {
  var Ingredient = "orange";
  var queryUrl = "http://www.recipepuppy.com/api/?i=" + ingredient;

  request(queryUrl, function(error, data) {
    if (!error && data.statusCode === 200) {
      var food = JSON.parse(data.body).results;
    
       callback(food);

      }
    });
  }


  const passportAuthenticationMiddleware = (request, response, next) => {
    if (request.user) {
      return next();
    }
    // If the user isn't logged in, redirect them to the login page
    return response.redirect("/home");
  }




      

