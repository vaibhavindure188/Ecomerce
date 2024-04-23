import React from 'react'
import './ProductCardCss.css'
import { useNavigate } from 'react-router-dom'
function ProductCard({product}) {
  const navigate = useNavigate()
  
  const handleClick = (product)=>{
    navigate(`/product/${5}`)
  }
  return (
    <div onClick={()=>handleClick(product)} className='productCard w-[15rem] m-3 transition-all cursor-pointer object-cover object-left-top'>
      <div className='h-[20rem]'>
        <img src={product.imageUrl} className='h-full w-full object-cover object-left-top'   alt='productimg'/>
      </div>

      <div className='textPart bg-white p-3'>
        <div>
        <p className='font-bold opacity-60'>{product.brand}</p>
        <p>{product.title}</p>
        </div>

        <div className='flex items-center space-x-2'>
            <p className='font-semibold'>Rs {product.discountedPrice}</p>
            <p className='line-through opacity-50'>Rs {product.price}</p>
            <p className='text-green-600 font-semibold'>{product.discountPercent}% off</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
