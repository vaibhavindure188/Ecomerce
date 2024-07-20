const reviewService = require('../services/review.service.js')

const createReview = async(req, res) =>{
    const user = req.user
    try{
        const review = await reviewService.createReview(req.body, user)
        return res.status(200).send(review)
    }catch(e){
        return res.status(500).send({error : e.message})
    }
    
}

const getAllReviews = async(req, res) =>{
    try{
        const reviews = await reviewService.getAllReview(req.params.productId)
        return res.status(200).send(reviews)
    }
    catch(e){
        return res.status(500).send({error : e.message})
    }
}

module.exports = {createReview, getAllReviews}