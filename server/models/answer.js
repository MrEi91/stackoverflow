'use strict'
module.exports = function (sequelize, DataTypes) {
  var Answer = sequelize.define('Answer', {
    answer_content: DataTypes.STRING,
    QuestionId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        Answer.belongsTo(models.Question)
        Answer.belongsTo(models.User)
        Answer.hasMany(models.Vote)
      }
    }
  })
  return Answer
}
