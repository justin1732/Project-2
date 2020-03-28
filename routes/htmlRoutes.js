var db = require("../models");
var express = require ("express");
var router = express.Router();
var request = require ("request");

router.get('/', function (req, res, next){
  request ({
 url: 'https://trackapi.nutritionix.com/v2/search/instant?query=' + 'orange',
 headers: {
   'x-app-id': '1b56da4f',
   'x-app-key': '1280ff1c8a5c5c57611dce7ae53c9e09',

 }, function (error, response, body){
   if (!error && response.statuscode ===200){
     console.log(body);
     res.json(body.self.food_name);

   }else
   res.json(error);
 }
  });
   });;


  //  app.post ("index.js", function (req, res){
    // appendchild.res.json(body.self.food_name).('<div>"bob"</div>')
  //  })
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Examples.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Examples.findOne({ where: { id: req.params.id } }).then(function(dbExamples) {
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