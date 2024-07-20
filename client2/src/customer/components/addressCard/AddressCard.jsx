import React from 'react'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../../state/Order/Action';

function AddressCard({item}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleClick = () =>{
    dispatch(createOrder(item));
    navigate(`/checkout/${3}`);
}
  return (
    <div>
      <div className='space-y-3'>
        <p className='font-semibold text-lg'>{item?.name}  {item?.lastName}</p>
        <p className='opacity-80'>{item?.city}, {item?.address}, {item?.zip}</p>
        <div >
            <p className='font-semibold text-lg'>Phone No</p>
            <p>{item?.phonNumber}</p>
        </div>
      </div>
      
      <Button onClick={()=>handleClick()} variant="contained" color="primary" size='large' sx={{mt:2, bgcolor:'indigo',marginBottom:1}}>Use this address</Button>
    </div>
  )
}

export default AddressCard
