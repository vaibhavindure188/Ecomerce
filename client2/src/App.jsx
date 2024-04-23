import { useState } from 'react'
import './App.css'

import Product from './customer/components/products/Product'
import ProductDetails from './customer/components/productDetails/ProductDetails'
import CheckOut from './customer/components/checkout/CheckOut'
import Order from './customer/components/order/Order'
import { Route, Routes } from 'react-router-dom'
import CustomerRoutes from './routes/CustomerRoutes'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/*' element={<CustomerRoutes/>}></Route>
      </Routes>
      
      
      
    </>
  )
}

export default App
