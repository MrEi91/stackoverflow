'use strict'

const models = require('../models')

let methods = {}

methods.readAnswers = (req, res, next) => {
  models.Answer.findAll({
    include: [{
      model: models.User
    }, {
      model: models.Vote
    }]
  })
    .then((answers) => {
      res.send(answers)
    })
    .catch((err) => {
      res.send(err)
    })
}

methods.getAnswer = (req, res, next) => {
  models.Answer.findById(req.params.id)
    .then((answer) => {
      res.send(answer)
    })
    .catch((err) => {
      res.send(err)
    })
}

methods.createAnswer = (req, res, next) => {
  models.Answer.create({
    answer_content: req.body.answer,
    QuestionId: req.body.QuestionId,
    UserId: req.body.UserId
  })
    .then((answer) => {
      res.send(answer)
    })
    .catch((err) => {
      res.send(err)
    })
}

methods.updateAnswer = (req, res, next) => {
  models.Answer.findById(req.params.id)
    .then((answer) => {
      answer.update({
        answer_content: req.body.answer
      })
        .then((answer) => {
          res.send(answer)
        })
        .catch((err) => {
          res.send(err)
        })
    })
    .catch((err) => {
      res.send(err)
    })
}

methods.deleteAnswer = (req, res, next) => {
  models.Answer.findById(req.params.id)
    .then((answer) => {
      answer.destroy({
        where: {
          id: req.params.id
        }
      })
        .catch((err) => {
          res.send(err)
        })
    })
    .catch((err) => {
      res.send(err)
    })
}

module.exports = methods
