const express = require('express')
const router = express.Router()
const userController = require('../controller/user.controller.js')
// url will be http://localhost:5454/api/users/...
router.get('/profile', userController.getUserProfile)
router.get('/', userController.getAllUsers)

module.exports = router
