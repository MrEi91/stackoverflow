'user strict'

const models = require('../models')
// const slug = require('slug')

let readQuestions = (req, res, next) => {
	models.Question.findAll().then((questions) => {
		res.send(questions)
	}).catch((e) => {
		res.send({
			error: e
		})
	})
}

let createQuestion = (req, res, next) => {
	models.Question.create({
		title: req.body.title,
		question_content: req.body.question_content,
		UserId: req.body.email,
		// slug: slug(req.body.title).toLowerCase()
	}).then((question) => {
		res.send({
			message: "CREATE NEW QUESTION SUCCESS!",
			question: question
		})
	}).catch((e) => {
		res.send({
			error: e
		})
	})
}

let updateQuestion = (req, res, next) => {
	models.Question.findById(req.params.id).then((question) => {
		if (!question) {
			res.send({
				message: "QUESTION IS NOT FOUND!"
			})
		} else {
			question.update(req.body).then((result) => {
				res.send({
					message: "QUESTION HAS BEEN UPDATED!",
					question: result
				})
			})
		}
	}).catch((e) => {
		res.send({
			error: e
		})
	})
}

let deleteQuestion = (req, res, next) => {
	models.Question.findById(req.params.id).then((question) => {
		if (!question) {
			res.send({
				message: "QUESTION IS NOT FOUND!"
			})
		} else {
			question.destroy({
				where: {
					id: req.params.id
				}
			})
		}
	}).catch((e) => {
		res.send({
			error: e
		})
	})
}

module.exports = {
	createQuestion,
	readQuestions,
	updateQuestion,
	deleteQuestion
}
