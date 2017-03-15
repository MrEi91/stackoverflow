'use strict'
module.exports = function (sequelize, DataTypes) {
  var Question = sequelize.define('Question', {
    title: DataTypes.STRING,
    question_content: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        Question.hasMany(models.Answer)
        Question.belongsTo(models.User)
      }
    }
  })
  return Question
}
