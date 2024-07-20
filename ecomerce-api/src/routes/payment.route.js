const express = require('express')
const authorization  = require('../middleware/authorization.js')
const router = express.Router()
const {createPaymentLink}  = require('../controller/payment.controller.js')

router.get('/:orderId', authorization, createPaymentLink)

module.exports = router