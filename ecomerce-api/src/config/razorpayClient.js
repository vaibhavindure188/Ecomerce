
const Razorpay = require('razorpay')
 const razorpay = new Razorpay({
    key_id: 'rzp_test_JKVMk78jNzCHsG',
    key_secret: 'qsFyQ1D7gLtmPh28yCSEsecV',
    headers: {'Content-Type': 'application/json'} 
})
// razorpay.paymentLink.all()
module.exports = razorpay