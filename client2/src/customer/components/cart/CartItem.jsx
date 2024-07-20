import { Button, IconButton } from '@mui/material'
import React from 'react'
// import AddCircleOutlineIcon from '@mui/icons/AddCircleOutline';
// import RemoveCircleOutlineIcon from '@mui/icons/RemoveCircleOutline';
import {useDispatch} from 'react-redux'
import { removeCartItem, updateCartItem } from '../../../state/Cart/Action'
function CartItem({item}) {
  const dispatch = useDispatch()

  const hadleRemoveCartItem = (cartItemId)=>{
    dispatch(removeCartItem(cartItemId));
  }

  const handleQuantitiyChange = (num) =>{
    const data = {cartItemId: item?._id, quantity:item?.quantity + num }
    dispatch(updateCartItem(data));
  }
  return (
    <div className='m-20 border p-10 '>
      <div className='flex gap-x-5'>
        <div className='h-[13rem] w-[10rem]'>
            <img className='h-full w-full object-cover object-top' src={item?.product?.imageUrl} alt='img'></img>
        </div>

        <div className='space-y-1'>
            <p className='font-semibold text-lg'>{item?.product?.title}  </p>
            <p className='opacity-80'>size {item?.size}, {item?.product?.color}</p>
            <p className='opacity-50'>seller: {item?.product?.description}</p>

            <div className='flex space-x-5 pt-3 text-lg pb-4'>
                <p className='text-green-500 font-bold'>₹ {item?.discountedPrice}</p>
                <p className='line-through opacity-60'>₹ {item?.price}</p>
                <p className='font-semibold'>{item?.product?.discountPresent}% off</p>
            </div>

            
      </div>
      
      </div>
      <div className='flex space-x-4 mt-5'>
            <Button onClick={()=>handleQuantitiyChange(1)}   className='border bg-lime-950 h-8 w-3 ' color='secondary' sx={{bgcolor:'darkseagreen', marginLeft:''}}>
              +
            </Button>
                {/* <AddCircleOutlineIcon/> */}
                
            
            <span className='space-x-7 '>{item?.quantity}</span>
            <Button onClick={()=>handleQuantitiyChange(-1)} disabled={item?.quantity <= 1} className='border bg-lime-950 h-8 w-10 ' color='secondary' sx={{bgcolor:'darkseagreen', marginLeft:''}}>
                {/* <RemoveCircleOutlineIcon/> */}
                -
            </Button>

            <button onClick={()=>hadleRemoveCartItem(item._id)} className=' h-8 bg-orange-700 w-20 border rounded-md hover:bg-orange-900'>Remove</button>
        </div>
        
    </div>
  )
}

export default CartItem
