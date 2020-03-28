var db = require("../models");

module.exports = function(app) {
    app.post("/api/login", function(req, res) {
        // db.examples.create(req.body).then(function(dbExample) {
        //   res.json(dbExample);
        // });
        //check to see if user is in the db
        //does password match
        //if there okay
        //if not 401

      });

    app.post("/api/signup",function(req,res){
        db.User.find(req.body).then(function(dbUser){
            console.log("you exist");
        });
        db.User.create(req.body).then(function(dbUser) {
            res.json(dbUser);
        });
    });
}