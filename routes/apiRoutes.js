var db = require("../models");
const request = require("request");
// var UserId = 3;

module.exports = function(app) {
  // Get all examples
  console.log("In api routes")
  
//   app.get("/api/users", passportAuthenticationMiddleware, function(req, res) {
//     console.log("in /api/users");
//     console.log(res.json(UserId));
//     var something = "this thing";
//   //   db.User.findAll({
//   //       include: [{
//   //         model: db.Recipes,
//   //         where: {
//   //         UserId: res.json(UserId)
//   //       }
//   //       }]
//   //   }).then(function(data) {
//   //     console.log("Results: ", data)
//   //     res.json(data);
      
//   // });
    
//   });
//   app.get("/api/users2", passportAuthenticationMiddleware, function(req, res) {
//     console.log("in /api/users2")
//      db.Ingredients.findAll({
//       where: {
//         UserId: id
//       },
//       include: [{
//         model: db.User, 
//         where: {
//           id: UserId
//         }
//       }]
//   }).then(function(data) {
//     console.log("Results: ", data)
//     res.json(data);
    
//   });
// });

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



      

