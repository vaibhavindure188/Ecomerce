const express = require('express')
const cors = require('cors')
const mongoose= require('mongoose')

const app = express()
app.use(express.json())
app.use(cors())

try{
    mongoose.connect("mongodb://127.0.0.1:27017/mydb")
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
app.use('/users', userRouters)

module.exports = app;
