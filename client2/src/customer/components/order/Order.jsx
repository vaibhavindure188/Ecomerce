import { Grid } from '@mui/material'
import React from 'react'
import OrderCart from './OrderCart'

function Order() {
    const orderSt = [
        {label: "Delevered", value:'Delevered'},
        {label: "On The Way", value:'OnTheWay'},
        {label: "Canceled", value:'Canceled'},
        {label: "Returned", value:'Returned'},

    ]
  return (
    <div>
      <Grid container className='pl-20 pt-10  '>
        <Grid item sx={{width:"20rem"}} xs={3} lg={3} className='sticky top-5 h-[100vh]'>
            <div className='space-y-4 border '>
                <h1 className='px-6 pt-3 font-bold text-lg'>Filter</h1>
                <div className='border p-6'>
                    <h1 className='font-semibold'>Order Status</h1>
                    
                    {
                        orderSt.map((option) => (
                            <div className='pt-3 space-x-3'>
                                <input type='checkbox' defaultValue={option.value} />
                                <label htmlFor={option.value}>{option.label}</label>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Grid>
        <Grid item xs={9} lg={8} className='space-y-4'>
                    
                    {
                        [1,1,1,1].map((item) =><OrderCart />)
                    }
        </Grid>
      </Grid>
    </div>
  )
}

export default Order
