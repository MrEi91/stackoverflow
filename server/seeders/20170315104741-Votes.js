'use strict'
const faker = require('faker')
module.exports = {
  up: function (queryInterface, Sequelize) {
    let arrVotes = []
    for (var i = 1; i <= 9; i++) {
      arrVotes.push({
        vote_count: i,
        UserId: i,
        AnswerId: i,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    return queryInterface.bulkInsert('Votes', arrVotes)
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
