'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

let question = require('./routes/question')
let user = require('./routes/user')
let answer = require('./routes/answer')
let vote = require('./routes/vote')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(morgan('tiny'))
app.use(cors())

app.use('/api', question)
app.use('/api', user)
app.use('/api', answer)
app.use('/api', vote)

app.listen(3000)

module.exports = app
