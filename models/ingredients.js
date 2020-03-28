module.exports = function(sequelize, DataTypes) {
    var ingredients = sequelize.define("Ingredients", {
      name: DataTypes.STRING,
      type: DataTypes.STRING, // ["vegetable", "fruit", "etc"]
      quantity: DataTypes.INTEGER
    });
    return ingredients;
  };