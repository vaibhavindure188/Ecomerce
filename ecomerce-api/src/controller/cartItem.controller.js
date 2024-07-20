const cartItemService = require('../services/cartItem.service.js')

const updateCartItem = async(req, res) =>{
    try{const user = await req.user
    const updatedCartItem = await cartItemService.updateCartItem(user._id, req.params.id, req.body)
    return res.status(200).send(updatedCartItem)}
    catch(e){
        return res.status(500).send({error : e.message})
    }
}

const removeCartItem = async(req, res) =>{
    const user = await req.user
    try{
        const cartItem = await cartItemService.removeCartItem(user._id, req.params.id)
        return res.status(200).send(cartItem)
    }
    catch(e){
        // console.log('in cartitem.controller, you got eror 500 = ',e.message)
        return res.status(500).send({error: e.message})
    }
}

module.exports = {updateCartItem, removeCartItem}