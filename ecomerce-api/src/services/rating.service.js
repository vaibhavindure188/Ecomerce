const Rating = require('../models/rating.module.js')
const productService = require('../services/product.service.js')

const createRating = async(reqData, user) =>{
    const product = await productService.findProductById(reqData.productId)
    const rating = new Rating({
        user : user._id,
        product : product._id,
        rating : reqData.rating,
        createdAt : new Date()
    })

    await product.save()
    return await rating.save()
}

const getAllRating = async(productId) =>{
    return await Rating.find({product : productId}).populate('user')
}

module.exports = {createRating, getAllRating}