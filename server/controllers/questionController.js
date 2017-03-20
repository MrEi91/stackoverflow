'user strict'

const models = require('../models')
// const slug = require('slug')

let methods = {}

methods.readQuestions = (req, res, next) => {
  models.Question.findAll({
    include: [{
      model: models.Answer,
      include: {
        model: models.Vote
      }
    }]
  })
    .then((questions) => {
      res.send(questions)
    })
    .catch((err) => {
      res.send({
        message: 'error waktu find all',
        error: err
      })
    })
}

methods.getQuestion = (req, res, next) => {
  models.Question.findById(req.params.id)
    .then((question) => {
      res.send(question)
    })
    .catch((err) => {
      res.send(err)
    })
}

methods.createQuestion = (req, res, next) => {
  models.Question.create({
    title: req.body.title,
    question_content: req.body.question_content,
    UserId: req.body.id
      // slug: slug(req.body.title).toLowerCase()
  })
    .then((question) => {
      res.send({
        message: 'CREATE NEW QUESTION SUCCESS!',
        question: question
      })
    })
    .catch((e) => {
      res.send({
        error: e
      })
    })
}

methods.updateQuestion = (req, res, next) => {
  models.Question.findById(req.params.id)
    .then((question) => {
      if (!question) {
        res.send({
          message: 'QUESTION IS NOT FOUND!'
        })
      } else {
        question.update({
          question_content: req.body.question
        })
          .then((result) => {
            res.send({
              message: 'QUESTION HAS BEEN UPDATED!',
              question: result
            })
          })
          .catch((err) => {
            res.send({
              error: error
            })
          })
      }
    })
    .catch((e) => {
      res.send({
        error: e
      })
    })
}

methods.deleteQuestion = (req, res, next) => {
  models.Question.findById(req.params.id)
    .then((question) => {
      if (!question) {
        res.send({
          message: 'QUESTION IS NOT FOUND!'
        })
      } else {
        question.destroy({
          where: {
            id: req.params.id
          }
        }).catch((error) => {
          res.send({
            error: error
          })
        })
      }
    })
    .catch((e) => {
      res.send({
        error: e
      })
    })
}

module.exports = methods
