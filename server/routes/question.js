'use strict'
const express = require('express')
const router = express.Router()
const controller = require('../controllers/questionController')

router.get('/questions', controller.readQuestions)
router.post('/question', controller.createQuestion)
router.put('/question/:id', controller.updateQuestion)
router.delete('/question/:id', controller.deleteQuestion)

module.exports = router
