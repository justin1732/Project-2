module.exports = function (sequelize, DataTypes) {
    var Recipes = sequelize.define("Recipes", {
      title: DataTypes.STRING,
        // ref: DataTypes.STRING, // ["vegetable", "fruit", "etc"]
      });
  
      Recipes.associate = function (models) {
        Recipes.belongsTo(models.User, {
          foreignKey: {
            allowNull: true
          }   });
        }
    return Recipes;
  
  }