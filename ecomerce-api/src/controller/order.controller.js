const orderService = require('../services/order.service.js')

const creatOrder = async(req, res) =>{
    const user= await req.user
    try{
        // console.log('in ordercontroler address = ',req.body)
        const createdOrder = await orderService.createOrder(user, req.body)
        return res.status(200).send(createdOrder)
    }
    catch(e){
        // console.log('in orderControler , eror = ',e.message)
        return res.status(500).send({error : e.message})
    }
}

const findOrderById = async(req, res) =>{
    try{
        // const order = await orderService.findOrderById(req.params.id)
        console.log(order)
        return res.status(200).send(order)
    }
    catch(e){
        return res.status(500).send({error : e.message})
    }
}

const orderHistory = async(req, res) =>{
    const user = await req.user
    try{    
        const orders = await orderService.userOrderHistory(user._id)
        return res.status(200).send(orders)
    }
    catch(e){
        return res.status(500).send({error : e.message})
    }
}

module.exports =  {creatOrder, findOrderById, orderHistory}