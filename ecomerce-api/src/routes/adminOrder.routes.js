const authorization = require('../middleware/authorization.js')
const express = require('express')
const router = express.Router()
const orderController = require('../controller/adminOrder.controller.js')

// url will be http://localhost:5454/api/admin/order/...
router.get('/', authorization, orderController.getAllOrders)
router.put('/:orderId/confirm', authorization, orderController.confirmOrder)
router.put('/:orderId/cancel', authorization, orderController.cancelOrder)
router.put('/:orderId/delete', authorization, orderController.deleteOrder)
router.put('/:orderId/deliver', authorization, orderController.deleverOrder)
router.put('/:orderId/ship' ,authorization, orderController.shipOrder)

module.exports = router;