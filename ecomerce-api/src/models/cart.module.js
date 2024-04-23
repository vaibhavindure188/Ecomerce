const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    cartItems:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"cartItems",
            required:true
        }
    ],
    totalItem:{
        type:Number,
        required:true,
        default:0
    },
    totalPrice:{
        type:Number,
        required:true,
        default:0
    },
    totalDiscountedPrice:{
        type:Number,
        required:true,
        default:0
    },
    discounte:{
        type:Number,
        required:true,
        default:0
    }
})

const Cart = mongoose.model("cart", cartSchema)
module.exports = Cart;