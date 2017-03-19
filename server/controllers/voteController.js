'use strict'

const models = require('../models')

let methods = {}

methods.getVotes = (req, res, next) => {
	models.Vote.findAll()
		.then((votes) => {
			res.send(votes)
		})
		.catch((err) => {
			res.send(err)
		})
}

methods.createVote = (req, res, next) => {
	models.Vote.create({
			vote_count: req.body.vote_count,
			AnswerId: req.body.AnswerId,
			UserId: req.body.UserId
		})
		.then((vote) => {
			res.send(vote)
		})
		.catch((err) => {
			res.send(err)
		})
}

methods.updateVote = (req, res, next) => {
	models.Vote.findById(req.params.id)
		.then((vote) => {
			vote.update({
					vote_count: req.body.vote_count,
					AnswerId: req.body.AnswerId,
					UserId: req.body.UserId
				})
				.then((vote) => {
					req.send(vote)
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
