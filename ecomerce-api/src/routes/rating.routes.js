const express = require('express')
const router = express.Router()
const authorization = require('../middleware/authorization.js')
const ratingController = require('../controller/rating.controller.js')

// url will be http://localhost:5454/api/ratings/...
router.post('/create' , authorization, ratingController.createRating)
router.get('/product/:productId', authorization, ratingController.getAllRating)

module.exports = router