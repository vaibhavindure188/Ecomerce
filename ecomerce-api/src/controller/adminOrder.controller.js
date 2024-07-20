const orderService = require('../services/order.service.js')

const getAllOrders = async(req, res) =>{
    try{
        const orders = await orderService.getAllOrders()
        return res.status(200).send(orders)
    }
    catch(e){
        return res.status(500).send({"error" : e.message})
    }
}

const confirmOrder = async(req, res) =>{
    const orderId = req.params.orderId ;
    try{
        const order = await orderService.confirmOrder(orderId)
        return res.status(200).send(order)
    }
    catch(e){
        return res.status(500).send({error : e.message})
    }
}

const shipOrder = async(req, res) =>{
    const orderId = req.params.orderId ;
    try{
        const order =await orderService.shippedOrder(orderId)
        return res.status(200).send(order)
    }
    catch(e){
        return res.status(500).send({error : e.message})
    }
}

const deleverOrder = async(req, res) =>{
    const orderId = req.params.orderId
    try{
        const order = await orderService.deleverOrder(orderId)
        return res.status(200).send(order)
    }
    catch(e){
        return res.status(500).send({error : e.message})
    }
}

const deleteOrder = async(req, res) =>{
    const orderId = req.params.orderId
    try{
        const order = await orderService.deleteOrder(orderId)
        return res.status(200).send(order)
    }
    catch(e){
        return res.status(500).send({error: e.message});
    }
}

const cancelOrder = async(req, res) =>{
    const orderId = req.params.orderId
    try{
        const order = await orderService.cancelledOrder(orderId)
        return res.status(200).send(order)
    }
    catch(e){
        return res.status(500).send({error : e.message})
    }
}

module.exports =  {getAllOrders, shipOrder, deleteOrder, deleverOrder, cancelOrder, confirmOrder}