module.exports = function(sequelize, DataTypes) {
    var food = sequelize.define("food", {
      name: DataTypes.STRING,
      link: DataTypes.STRING,
      quantity: DataTypes.INTEGER
    });
    return food;
  };