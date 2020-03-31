module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      userName: DataTypes.STRING,
      password: DataTypes.STRING
    });

    User.associate = function (models){
       User.hasMany(models.Recipes)
      User.hasMany(models.Ingredients)
    }
    return User;
  };