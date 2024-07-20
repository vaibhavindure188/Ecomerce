import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomeSectionCard({item}) {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col cursor-pointer items-center bg-white rounded-lg shadow-lg overflow-hidden mx-3 w-[15rem]' onClick={()=>navigate(`/product/${item._id}`)}>
      <div className='h-[13rem] w-[10rem]' >
        <img src={item.imageUrl}  alt="card"  className='object-cover object-top w-full h-full'/>
      </div>
      <div>
        <h3 className='text-lg font-medium text-gray-900'>{item.brand}</h3>
        <p className='mt-2 text-sm text-gray-500'>{item.title}</p>
      </div>
    </div>
  )
}

export default HomeSectionCard
