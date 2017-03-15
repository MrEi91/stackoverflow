'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

// let index = require('./routes/index')
let user = require('./routes/user')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(morgan('tiny'))
app.use(cors())
// app.use('/api', index)
app.use('/api', user)

app.listen(3000)

module.exports = app
