const productController  = require('../controller/product.controller.js')
const express = require('express')
const  authorization = require('../middleware/authorization.js')
const router = express.Router()

// url will be http://localhost:5454/api/admin/products/...
router.post('/', authorization, productController.createProduct)
router.post('/creates', authorization, productController.createMultipleProduct)
router.put('/:id', authorization, productController.updateProduct)
router.delete('/:id', authorization, productController.deleteProduct)

module.exports = router