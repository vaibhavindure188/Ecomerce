import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getCart } from '../../../state/Cart/Action'
function Cart() {
  const navigate = useNavigate()
  let cartItems = [];
  const dispatch = useDispatch()
  const {cart}  = useSelector(store=>store)
  useEffect(()=>{
    dispatch(getCart());
  },[cart?.updateCartItem, cart?.deleteCartItem])

  console.log(cartItems)
  return (
    <div>
      <div className='grid grid-cols-3'>
      <div className=' col-span-2'>
      
      {
        cart?.cart?.cartItems?.map((item) =><CartItem item ={item} /> )
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
            <span>{cart?.cart?.totalPrice}</span>
          </div>

          <div className='flex justify-between'>
            <span>Discount</span>
            <span>- ₹ {cart?.cart?.discount}</span>
          </div>

          <div className='flex justify-between text-sky-700'>
            <span>Delivery Charges</span>
            <span>Free</span>
          </div>
          <hr/>
          <div className='flex justify-between text-green-600 font-semibold '>
            <span>Total Ammount</span>
            <span className='text-xl'>₹ {cart?.cart?.totalDiscountedPrice}</span>
          </div>
        </div>
        <button onClick={()=>navigate(`/checkout/${1}`)}  className='ml-4 text-bold text-white h-10 rounded-lg w-[10rem] bg-green-800 mt-7 hover:bg-blue-700 items-center'>Checkout</button>

      </div>
      
    </div>
    </div>
    
  )
}

export default Cart
