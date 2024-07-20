const Cart = require('../models/cart.module.js')
const CartItem = require('../models/cartItem.module.js')
const Product = require('../models/product.module.js')

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

const findUserCart = async(userId) =>{  // to find user cart 
    try{
        let cart = await Cart.findOne({user: userId});
        let cartItems = await CartItem.find({cart: cart._id}).populate('product').exec();
        let totalPrice = 0, totalDiscountedPrice = 0, totalItem = 0;
        // console.log('in cart service , line 25: ',typeof(cartItems))
        for(let cartItem of cartItems){
            totalPrice += cartItem.price * cartItem.quantity;
            totalDiscountedPrice += cartItem.discountedPrice;
            totalItem += cartItem.quantity;
        }

        cart.totalPrice = totalPrice;
        cart.cartItems = cartItems;
        cart.totalDiscountedPrice = totalDiscountedPrice;
        cart.discount = totalPrice - totalDiscountedPrice;
        cart.totalItems = totalItem;
        console.log('total discnt price',cart)
        return  cart;
    }
    catch(e){
        throw new Error(e.message);
    }
}


const addCartItem = async(userId, req) =>{
    try{
        const cart = await  Cart.findOne({user: userId});
        // console.log('in cart.servcie , product id = ', req.productId)
        const product = await Product.findById(req.productId)
        const isPresent = await CartItem.findOne({cart: cart._id, product : product._id});

        if(!isPresent){
            const cartItem = new CartItem({
                cart: cart._id,
                userId : userId,
                product : product._id,
                size : req.size,
                quantity: 1,
                price: product.price,
                discountedPrice: product.discountedPrice
            })

            const createdCartItem = await cartItem.save();
            
            console.log("in cart.service created cart size = ",createdCartItem.length)
            cart.cartItems.push(createdCartItem);
            await cart.save();
            return cart;
        }
        // console.log("in cart.service totaldisc price = ",cart.totalDiscountedPrice)
        // console.log("in cart.service total price  = ",cart.totalPrice)
        // console.log('in cart.servcie = item was present alredy with cartitem size = ',cart.cartItems.length )
        return "isPresent";
    }
    catch(e){
        throw new Error(e.message);
    }
}


module.exports = {createCart, findUserCart, addCartItem}


