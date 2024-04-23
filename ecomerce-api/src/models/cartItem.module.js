const mongoose = require("mongoose")

const cartItemSchema = mongoose.Schema({
    cart:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"cart",
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true

    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products",
        required:true
    },
    size:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true,
        default:1
    },
    price:{
        type:Number,
        required:true
    },
    discountedPrice:{
        type:Number,
        required:true
    }
})

const CartItem = mongoose.model("cartItems", cartItemSchema)
module.exports=  CartItem