'use strict'
const express = require('express')
const router = express.Router()
const controller = require('../controllers/userController')

router.get('/users', controller.getUsers)
router.post('/user/register', controller.register)

module.exports = router
