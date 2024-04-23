import { Button, IconButton } from '@mui/material'
import React from 'react'
// import AddCircleOutlineIcon from '@mui/icons/AddCircleOutline';
// import RemoveCircleOutlineIcon from '@mui/icons/RemoveCircleOutline';

function CartItem() {
  return (
    <div className='m-20 border p-10 '>
      <div className='flex gap-x-5'>
        <div className='h-[13rem] w-[10rem]'>
            <img className='h-full w-full object-cover object-top' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpVcG3Da1EFjcL-0UInADeR_ACih-5G6KSVjl1fKyuig&s' alt='img'></img>
        </div>

        <div className='space-y-1'>
            <p className='font-semibold text-lg'>Cotton shirt  </p>
            <p className='opacity-80'>size L, white</p>
            <p className='opacity-50'>seller: cristiano fashion</p>

            <div className='flex space-x-5 pt-3 text-lg pb-4'>
                <p className='text-green-500 font-bold'>₹ 300</p>
                <p className='line-through opacity-60'>₹ 500</p>
                <p className='font-semibold'>45% off</p>
            </div>

            
      </div>
      
      </div>
      <div className='flex space-x-4 mt-5'>
            <Button className='border bg-lime-950 h-8 w-3 ' color='secondary' sx={{bgcolor:'darkseagreen', marginLeft:''}}>
              +
            </Button>
                {/* <AddCircleOutlineIcon/> */}
                
            
            <span className='space-x-7 '>3</span>
            <Button className='border bg-lime-950 h-8 w-10 ' color='secondary' sx={{bgcolor:'darkseagreen', marginLeft:''}}>
                {/* <RemoveCircleOutlineIcon/> */}
                -
            </Button>

            <button className=' h-8 bg-orange-700 w-20 border rounded-md hover:bg-orange-900'>Remove</button>
        </div>
        
    </div>
  )
}

export default CartItem
