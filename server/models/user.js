'use strict'
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        User.hasMany(models.Question)
        User.hasMany(models.Vote)
        User.hasMany(models.Answer)
        User.belongsToMany(models.Answer, {
          through: 'Vote'
        })
      }
    }
  })
  return User
}
