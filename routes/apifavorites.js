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
}