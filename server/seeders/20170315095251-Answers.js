'use strict'
const faker = require('faker')
module.exports = {
  up: function (queryInterface, Sequelize) {
    let arrAnswer = []
    for (var i = 1; i <= 9; i++) {
      arrAnswer.push({
        answer_content: faker.lorem.sentence(),
        QuestionId: i,
        UserId: i,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    return queryInterface.bulkInsert('Answers', arrAnswer)
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
}
