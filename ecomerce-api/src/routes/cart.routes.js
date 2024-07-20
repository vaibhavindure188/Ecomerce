const cartController = require('../controller/cart.controller.js')
const express = require('express')
const router = express.Router()
const authorization = require('../middleware/authorization.js')

// url will be http://localhost:5454/api/cart/...
router.get('/', authorization, cartController.findUserCart)
router.put('/add', authorization, cartController.addItemToCart)

module.exports = router;