var db = require("../models");

module.exports = function(app) {
    app.post("/api/Ifavorite", function(req,res){
        console.log("working", req.body);
        // res.json({message:"hello"});
        db.Ingredients.create(req.body).then((dbIngredients) =>{
            res.json(dbIngredients)
        }).catch((err)=>{
            console.log("err",err);
        })
    });

    app.post("/api/Rfavorite", function(req,res){
        console.log("working", req.body);
        // res.json({message:"hello"});
        db.Recipes.create(req.body).then((dbRecipes) =>{
            res.json(dbRecipes)
        }).catch((err)=>{
            console.log("err",err);
        })
    });

    app.post("/api/users", function(req,res){
        console.log("working 2", req.body);
        db.Recipes.findAll({
            where:{
                UserId: req.body.UserId
            }
        })
        .then((dbRecipes)=>{
            console.log("recipes", dbRecipes, "data", res.body);
            res.json(dbRecipes);
            // res.render('index', {
            //     recipeItems: dbRecipes
            // });
        })
    });
    app.post("/api/users2", function(req,res){
        console.log("working 3", req.body);
        db.Ingredients.findAll({
            where:{
                UserId: req.body.UserId
            }
        })
        .then((dbIngredients)=>{
            console.log(dbIngredients);
            res.json(dbIngredients);

        })
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