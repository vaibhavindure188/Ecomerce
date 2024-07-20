const express = require('express')
const router = express.Router()

const authorization = require('../middleware/authorization.js')
const reviewController = require('../controller/review.controller.js')


// url will be http://localhost:5454/api/reviews/...
router.post('/create', authorization, reviewController.createReview)
router.get('/product/:productId', authorization, reviewController.getAllReviews)

module.exports = router