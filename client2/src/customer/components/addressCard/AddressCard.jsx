import React from 'react'
import { Button } from '@mui/material'
function AddressCard({item}) {
  return (
    <div>
      <div className='space-y-3'>
        <p className='font-semibold text-lg'>{item.name}  {item.lastName}</p>
        <p className='opacity-80'>{item.city}, {item.address}, {item.zip}</p>
        <div >
            <p className='font-semibold text-lg'>Phone No</p>
            <p>{item.phonNumber}</p>
        </div>
      </div>
      
      
    </div>
  )
}

export default AddressCard
