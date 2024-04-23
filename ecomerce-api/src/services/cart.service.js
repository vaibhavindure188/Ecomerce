const Cart = require('../models/cart.module.js')

const createCart = async(user) =>{
    try{
        // const cart = await Cart.create(user);
        // return cart;

        // or 
        const cart = new Cart({user})
        const newCart = await cart.save()
        return newCart
    
    }catch(e){
        throw new Error("error in cart creation ",e.message)
    }
}

module.exports = createCart


