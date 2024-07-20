const express = require('express')
const cors = require('cors')
const mongoose= require('mongoose')

const app = express()
app.use(express.json())
app.use(cors())

try{
    // mongodb+srv://indurevaibhav9:Vaibhav*18@cluster0.0r2c9zd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    mongoose.connect("mongodb://127.0.0.1:27017/students")
    console.log("data base conneced successfully")
}catch(e){
    console.log("there is an erro while connecting with db ", e)
}

app.get("/", (req,res) =>{
    return res.status(200).send({message:"welcome to the ecomerce website "})
})

const authRouters = require('./routes/auth.route.js')
app.use('/auth', authRouters)

const userRouters = require('./routes/user.route.js')
app.use('/api/users', userRouters)

const adminOrderRouters = require('./routes/adminOrder.routes.js')
app.use('/api/admin/order', adminOrderRouters)

const productRouters = require('./routes/product.routes.js')
app.use('/api/products', productRouters)

const adminProductRouters = require('./routes/adminProduct.routes.js')
app.use('/api/admin/products', adminProductRouters)

const cartRouters = require('./routes/cart.routes.js')
app.use('/api/cart', cartRouters)

const cartItemRouters = require('./routes/cartItem.routes.js')
app.use('/api/cartItem', cartItemRouters)

const orderRouters = require('./routes/order.route.js')
app.use('/api/orders', orderRouters)

const reviewRouters = require('./routes/review.routes.js')
app.use('/api/reviews', reviewRouters)

const ratingRouters = require('./routes/rating.routes.js')
app.use('/api/ratings' , ratingRouters)

const paymentRouter = require('./routes/payment.route.js')
app.use('/api/payment', paymentRouter)

module.exports = app;
