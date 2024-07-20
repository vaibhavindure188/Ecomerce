const productController =  require('../controller/product.controller.js')
const express = require('express');
const router = express.Router();
const authorization= require('../middleware/authorization.js')

// url will be http://localhost:5454/api/products
router.get('/id/:id', authorization, productController.findProductById)
router.get('/', authorization, productController.getAllProduct)

module.exports = router