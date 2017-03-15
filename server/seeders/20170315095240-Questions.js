'use strict'
const faker = require('faker')

module.exports = {
  up: function (queryInterface, Sequelize) {
    let arrQuestions = []
    for (var i = 1; i <= 9; i++) {
      arrQuestions.push({
        title: faker.name.title(),
        question_content: faker.lorem.sentence(),
        UserId: i,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    return queryInterface.bulkInsert('Questions', arrQuestions)
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
