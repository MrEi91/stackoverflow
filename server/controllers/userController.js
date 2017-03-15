'use strict'

const models = require('../models')

let getUsers = (req, res, next) => {
  models.User.findAll().then((users) => {
    res.json(users)
  }).catch((e) => {
    if (err) {
      res.json({
        message: err
      })
    }
  })
}

module.exports = {
  getUsers
}
