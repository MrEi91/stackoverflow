'use strict'
const express = require('express')
const router = express.Router()
const controller = require('../controllers/userController')

router.get('/users', controller.getUsers)

module.exports = router
