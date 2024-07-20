const express = require('express')
const router = express.Router()
const authController = require('../controller/auth.controller.js')

// url will be http://localhost:5454/auth/...
router.post("/signup", authController.register)
router.post("/signin", authController.login)

module.exports = router