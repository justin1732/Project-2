var db = require("../models");
const request = require("request");

module.exports = function(app) {
  // Get all examples
  console.log("In api routes")
  
  app.get("/api/users", function(req, res, request, response) {
    console.log("in /api/users")
    db.Recipes.findAll({
     
    }).then(function(data) {
      console.log("Results: ", data)
      res.json(data)
      // res.render('index', {
      //   user: req.user,
      // })
    })
    db.Ingredients.findAll({
     
    }).then(function(data) {
      console.log("Results: ", data)
      response.json(data)
      // res.render('index', {
      //   user: req.user,
      // })
    })
    
  });

  // Create a new example
  app.post("/api/examples", passportAuthenticationMiddleware, function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id",passportAuthenticationMiddleware, function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

 }; 


function findfood(callback, ingredient) {
 
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
    if(request.url == '/signup') {
      return response.redirect('/signup');
    }
    
    // If the user isn't logged in, redirect them to the login page
    return response.redirect("/login");
  }



      

