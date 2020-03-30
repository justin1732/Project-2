var db = require("../models");

module.exports = function(app, passport) {
    console.log("in api console.log routes")
    app.post("/api/login", passport.authenticate('local'), function(req, res) {
        // db.examples.create(req.body).then(function(dbExample) {
        //   res.json(dbExample);
        // });
        //check to see if user is in the db
        //does password match
        //if there okay
        //if not 401
        console.log("req.user", req.user);
        res.json(req.user);

      });

    app.post("/api/signup", function(req,resp){
        // db.User.find(req.body).then(function(dbUser){
        //     console.log("you exist");
        // });
        console.log("the body has:", req.body);
    
        db.User.create(req.body).then((dbUser) => {
            resp.json(dbUser)
        })
        .catch((err)=> {
            console.log("err", err)
        })
    });
}


// Here we are creating a callback function to be used for routes that require authentication
