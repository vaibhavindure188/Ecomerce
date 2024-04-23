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
        tyep:Date,
        required:true
    },
    shippingAddress:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"addresses"
    },
    paymentDetails:{
        paymentMethod:{
            type:string
        },
        transactionId:{
            type:string
        },
        paymentId:{
            type:string
        },
        paymentStatus:{
            type:string,
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
        discounte:{
            type:Number,
            required:true,
            
        },
        totalItem:{
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