const cartService = require('../services/cart.service.js')

const findUserCart = async(req, res) =>{
    const user = await req.user
    try{
        const cart = await cartService.findUserCart(user?._id)
        return res.status(200).send(cart)
    }
    catch(e){
        console.log('in find usersCart : ', e.message)
        return res.status(500).send({error : e.message})
    }
}

const addItemToCart = async(req, res) =>{
    const user = await req.user
    try{
        console.log('cart.controler line 17 : ', req.body)
        const cart = await cartService.addCartItem(user._id, req.body);
        console.log('in cart.service line 18 , cartItems size = ', cart.cartItems.length())
        return res.status(200).send(cart)
    }catch(e){ 
        return res.status(500).send({error: e.message})
    }
}

module.exports = {findUserCart, addItemToCart}