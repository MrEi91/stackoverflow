'use strict'
const faker = require('faker')
var passwordHash = require('password-hash')

module.exports = {
  up: function (queryInterface, Sequelize) {
    let arrUsers = []
    for (var i = 1; i <= 9; i++) {
      arrUsers.push({
        username: faker.internet.userName(),
        fullname: faker.name.findName(),
        email: faker.internet.email(),
        password: passwordHash.generate('123'),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    return queryInterface.bulkInsert('Users', arrUsers)
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
