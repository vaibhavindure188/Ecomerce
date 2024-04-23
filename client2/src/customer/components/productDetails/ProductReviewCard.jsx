import { Avatar, Grid, Rating } from '@mui/material'
import React from 'react'

function ProductReviewCard() {
  return (
    
    <Grid container className='space-x-3 mt-10 border px-5 py-3'>
        <Grid item >
            <Avatar sx={{color:'white', bgcolor:'indigo'}}>V</Avatar>
        </Grid>

        <Grid item>
            <div>
                <p className='font-semibold'>vaibhav</p>
                <p className='opacity-70 mb-3'>March 25, 2024</p>
            </div>
            <Rating value={4.5} readOnly precision={0.5} name='half-rating' />
            <p>nice product, I love this brand</p>
        </Grid>
    </Grid>
      

    
  )
}

export default ProductReviewCard
