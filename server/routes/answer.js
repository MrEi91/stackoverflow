'use strict'
const express = require('express')
const router = express.Router()
const controller = require('../controllers/answerController')

router.get('/answers', controller.readAnswers)
router.get('/answer/:id', controller.getAnswer)
router.post('/answer', controller.createAnswer)
router.put('/answer/:id', controller.updateAnswer)
router.delete('/answer/:id', controller.deleteAnswer)

module.exports = router
