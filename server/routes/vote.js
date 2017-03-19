'use strict'
const express = require('express')
const router = express.Router()
const controller = require('../controllers/voteController')

router.get('/votes', controller.getVotes)
router.post('/vote', controller.createVote)
router.put('/vote/:id', controller.updateVote)

module.exports = router
