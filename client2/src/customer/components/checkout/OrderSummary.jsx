import React from 'react'
import AddressCard from '../addressCard/AddressCard'
import CartItem from '../cart/CartItem'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { api } from '../../../config/apiConfig.js'
const OrderSummary = () => {
  const {order} = useSelector(store=>store)
  const orders = order.order?.orderItems;
  console.log(orders)
    let address = {
        name:"vaibhav",
        lastName : "indure",
        city : "pune",
        state: 'MH',
        zip : "411035",
        phonNumber : "9393827393",
        address: "akurdi pune"
    }
    if(order?.shippingAddress != null)
    address = order?.shippingAddress;
    console.log('in orderSummery address = ',order?.shippingAddress)
    console.log('in orderSUmmery : order = ', order.order)

   
    const handlePaymentClick = async()=>{
      const {data} = await api.get(`http://localhost:5454/api/payment/${order.order?._id}`)
      console.log('we reached at below get payemnt url')
      console.log(data.payment_link_url)
      window.location.href = data.payment_link_url;
    }
  return (
    <div>
        <div className='mx-20'>
        <AddressCard  item = {address}/>
        </div>
      
      <div>
      <div className='grid grid-cols-3'>
      <div className=' col-span-2'>
      
      {
        orders?.map((item) =><CartItem item={item} /> )
      }

      </div>

      <div className='sticky top-0 h-[100vh] flex flex-col p-8 mt-8 mr-8 gap-y-6 border pb-0 '>
        <div className='border px-4'>
          <p className='text-xl font-semibold '>Price Details</p>
          <hr />
        </div>
        
        <div className='space-y-1 text-lg px-4 font-semibold'>
          <div className='flex justify-between text-gray-500'>
            <span>Price</span>
            <span>₹ {order.order?.paymentDetails?.totalPrice}</span>
          </div>

          <div className='flex justify-between'>
            <span>Discount</span>
            <span>- ₹ {order.order?.paymentDetails?.discount}</span>
          </div>

          <div className='flex justify-between text-sky-700'>
            <span>Delivery Charges</span>
            <span>Free</span>
          </div>
          <hr/>
          <div className='flex justify-between text-green-600 font-semibold '>
            <span>Total Ammount</span>
            <span className='text-xl'>₹ {order.order?.paymentDetails?.totalDiscountedPrice    }</span>
          </div>
        </div>
        <button onClick={handlePaymentClick} className='ml-4 text-bold text-white h-10 rounded-lg w-[10rem] bg-green-800 mt-7 hover:bg-blue-700 items-center'>Payment</button>

      </div>
      
    </div>
    </div>
    </div>
  )
}

export default OrderSummary
