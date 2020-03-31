module.exports = function (sequelize, DataTypes) {
  var Ingredients = sequelize.define("Ingredients", {
    title: DataTypes.STRING,
      // ref: DataTypes.STRING, // ["vegetable", "fruit", "etc"]
    });

    Ingredients.associate = function (models) {
      Ingredients.belongsTo(models.User, {
        foreignKey: {
          allowNull: true
        }   });
      }
  return Ingredients;

}