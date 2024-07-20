const paymentService = require('../services/paymentService.js')

const createPaymentLink = async(req, res) =>{
    try {
        console.log('in payment Controler ')
        const {payment_link_url} = await paymentService.createPaymentLink(req.params.orderId)
        res.status(200).json({payment_link_url})
    } catch (error) {
        console.log('erorr in paynment controler = ', error.message)
        return res.status(500).send(error.message)
    }
}

module.exports = {createPaymentLink}