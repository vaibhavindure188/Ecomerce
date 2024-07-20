const cartItemController = require('../controller/cartItem.controller.js')
const express = require('express')
const  authorization  = require('../middleware/authorization.js')
const router = express.Router()

// url will be http://localhost:5454/api/cartItem/...
router.put('/:id', authorization, cartItemController.updateCartItem )
router.delete('/:id', authorization, cartItemController.removeCartItem)

module.exports = router;