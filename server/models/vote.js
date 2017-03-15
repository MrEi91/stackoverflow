'use strict'
module.exports = function (sequelize, DataTypes) {
  var Vote = sequelize.define('Vote', {
    vote_count: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    AnswerId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        Vote.belongsTo(models.Answer)
        Vote.belongsTo(models.User)
      }
    }
  })
  return Vote
}
