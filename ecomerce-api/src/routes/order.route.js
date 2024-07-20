const orderController= require('../controller/order.controller.js')
const express = require('express')
const authorization  = require('../middleware/authorization.js')
const router = express.Router()

// url will be http://localhost:5454/api/orders/...
router.post('/', authorization, orderController.creatOrder)
router.get('/user', authorization, orderController.orderHistory)
router.get('/:id', authorization, orderController.findOrderById)

module.exports = router