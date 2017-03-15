'use strict'
var passwordHash = require('password-hash')

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      validate: {
        isUnique: function(value, next) {
          User.find({
            where: {
              username: value
            },
            attributes: ['id']
          }).done(function(user) {
            if (user) {
              return next('Username already in used')
            }
            next()
          })
        }
      }
    },
    fullname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique: function(value, next) {
          User.find({
            where: {
              email: value
            },
            attributes: ['id']
          }).done(function(user) {
            if (user) {
              return next('Email address already in used')
            }
            next()
          })
        }
      }
    },
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Question)
        User.hasMany(models.Vote)
        User.hasMany(models.Answer)
      }
    },
    hooks: {
      beforeCreate: function(value, option) {
        let hashed = passwordHash.generate(value.password)
        value.password = hashed
      }
    }
  })
  return User
}
