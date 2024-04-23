import { Grid } from '@mui/material'
import React from 'react'

function OrderCart() {
  return (
    <div>
      <Grid container sx={{justifyContent:'space-between', marginLeft:4}} className='border shadow-xl hover:shadow-2xl p-5 items-center overflow-hidden'>
        <Grid item xs={5} >
            <div className='flex space-x-4 '>
                <div className='h-[12rem] w-[12rem]'>
                    <img className='w-full h-full object-cover object-top' src='data:image/jpeg;base64,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' alt='img' />
                </div>
                
                <div className='mt-7'>
                    <p className='font-bold text-lg'>Mens slim midi shirt</p>
                    <p>Size: M</p>
                    <p>Color: Black</p>
                </div>
            </div>
        </Grid>
        <Grid item xs={2} >
            <p className='font-semibold text-lg'>₹ 1023</p>
        </Grid>
        <Grid item xs={5}>
            
            <p>
            </p>
            {
                true && <p>
                <span className='font-semibold text-lg'>Expected Delevery on March 21</span><br></br>
                <span className='opacity-80'>Your item has  been Delevered</span>
            </p>

            }
            {
                false && <p>
                <span className='font-semibold text-lg'>Delevered on March 20</span>
                <span className='opacity-80'>Your item has been Delevered</span>
            </p>
            }
        </Grid>
      </Grid>
    </div>
  )
}

export default OrderCart
