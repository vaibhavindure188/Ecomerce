
const razorpay   = require("../config/razorpayClient.js");
const { findOrderById } = require("./order.service");

const createPaymentLink = async(orderId) =>{
    try{
        const order = await findOrderById(orderId);
        console.log('order = ', order)
        const paymentLink = await  razorpay.paymentLink.create({
            "amount": order.paymentDetails.totalDiscountedPrice*100 ,
            "currency": "INR",
            "accept_partial": true,
            "first_min_partial_amount": 100,
            "expire_by": 169109705700,
            "reference_id": new Date(),
            "description": "For XYZ purpose",
            "customer": {
              "name": order.user.firstName + "  "+ order.user.lastName,
              "email": order.user.email+'@gmail.com',
            },
            "notify": {
              "sms": true,
              "email": true
            },
            "reminder_enable": true,
            "notes": {
              "policy_name": "Jeevan Bima"
            },
            "callback_url": `http://localhost:5173/payment/${order._id}`,
            "callback_method": "get"
          })
        console.log('in payement servic, paymentLink = ', paymentLink)
        const paymentLinkId = paymentLink?.id
        const payment_link_url = paymentLink?.short_url
        const resData = {
            paymentLinkId,
            payment_link_url
        }
        return resData
    }
    catch(e){
        console.log('error in payment service', e)
        throw new Error(e.message)
    }
}

 const updateOrderInformation = async(orderId, reqData)=>{
    try {
        const order = await findOrderById(orderId);
        order.paymentDetails.paymentStatus = reqData.paymentId
        order.orderStatus = 'completed'
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = {updateOrderInformation, createPaymentLink}