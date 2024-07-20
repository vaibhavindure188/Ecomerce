const ratingService = require('../services/rating.service.js')

const createRating = async(req, res) =>{
    const user = req.user
    try{
        const rating = await ratingService.createRating(req.body, user)
        return res.status(200).send(rating)
    }catch(e){
        return res.status(500).send({error : e.message})
    }
}

const getAllRating  = async(req, res) =>{
    try{
        const ratings = await ratingService.getAllRating(req.params.productId)
        return res.status(200).send(ratings)
    }
    catch(e){
        return res.status(500).send({error : e.message})
    }
}

module.exports = {createRating, getAllRating}