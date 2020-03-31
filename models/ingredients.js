module.exports = function (sequelize, DataTypes) {
  var ingredients = sequelize.define("Ingredients", {
    title: DataTypes.STRING,
      // ref: DataTypes.STRING, // ["vegetable", "fruit", "etc"]
    });

    ingredients.associate = function (models) {
      ingredients.belongsTo(models.User, {
        foreignKey: {
          allowNull: true
        }   });
      }
  return ingredients;

}