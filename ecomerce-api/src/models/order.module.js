const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    orderItems:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"orderItems"
        }
    ],
    orderDate :{
        type:Date,
        required:true
    },
    deliveryDate:{
        type:Date,
        required:true
    },
    shippingAddress:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"addresses"
    },
    orderStatus : {
        type:String,
    },
    paymentDetails:{
        paymentMethod:{
            type:String
        },
        transactionId:{
            type:String
        },
        paymentId:{
            type:String
        },
        paymentStatus:{
            type:String,
            default:"PENDING"
        },
        totalPrice:{
            type:Number,
            required:true,
            
        },
        totalDiscountedPrice:{
            type:Number,
            required:true,
            
        },
        discount:{
            type:Number,
            required:true,
            
        },
        totalItems:{
            type:Number,
            required:true,
            
        },
        createdAt:{
            type:Date,
            default:Date.now()
        }
    }
})

const Order = mongoose.model("orders", orderSchema)
module.exports = Order