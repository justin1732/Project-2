module.exports = function(sequelize, DataTypes) {
    var ingredients = sequelize.define("ingredients", {
      name: DataTypes.STRING,
      link: DataTypes.STRING,
      quantity: DataTypes.INTEGER
    });
    return ingredients;
  };