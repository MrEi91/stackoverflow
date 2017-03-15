'use strict'

const models = require('../models')
const jwt = require('jsonwebtoken')
const hash = require('password-hash')

const secret = 'mrei91'

let getUsers = (req, res, next) => {
  models.User.findAll().then((users) => {
    res.json(users)
  }).catch((e) => {
    res.json({
      message: e
    })
  })
}

let register = (req, res, next) => {
  models.User.create(req.body).then((user) => {
    if (user) {
      res.json({
        message: 'SUCCESS REGISTER',
        user: user
      })
    }
  }).catch((e) => {
    res.json({
      error: e
    })
  })
}

let login = (req, res, next) => {
  models.User.findOne({
    where: {
      username: req.body.username
    }
  }).then((user) => {
    if (!user) {
      res.json({
        userNotFound: true
      })
    } else {
      if (hash.verify(req.body.password, user.password)) {
        let token = jwt.sign({
          username: user.username
        }, secret, {})

        res.json({
          token: token
        })
      } else {
        res.json({
          wrongPassword: true
        })
      }
    }
  }).catch((e) => {
    if (e) {
      req.json({
        error: e
      })
    }
  })
}

let verifyToken = (req, res) => {
  let params = req.params.token
  jwt.verify(params, secret, (err, decoded) => {
    if (err) console.log(err)

    if (!decoded) {
      res.json({
        username: false
      })
    } else {
      res.json({
        username: true
      })
    }
  })
}

module.exports = {
  getUsers,
  register,
  login,
  verifyToken
}
