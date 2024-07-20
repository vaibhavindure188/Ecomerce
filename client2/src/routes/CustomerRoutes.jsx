import React, { useState } from 'react'
import Navbar from '../customer/components/navbar/Navbar'
import { Routes,Route, useNavigate } from 'react-router-dom'
import Home from '../customer/pages/Home'
import Cart from '../customer/components/cart/Cart'
import Footer from '../customer/components/footer/Footer'
import Product from '../customer/components/products/Product'
import ProductDetails from '../customer/components/productDetails/ProductDetails'
import DeleveryAddressForm from '../customer/components/checkout/DeleveryAddressForm'
import OrderSummary from '../customer/components/checkout/OrderSummary'
import CheckOut from '../customer/components/checkout/CheckOut'
import Order from '../customer/components/order/Order'
import AuthModel from '../Auth/AuthModel'
function CustomerRoutes() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(true)
  const handleClose = ()=>{
    navigate('/')
  }
  return ( 
    <div>
      <div>
      
      {/* <CheckOut /> */}
      {/* <Order /> */}
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<AuthModel toggle={true} handleClose={handleClose} open={true} setOpen={setOpen}/>}></Route>
        <Route path='/register' element={<AuthModel toggle={false} handleClose={handleClose} open={true} setOpen={setOpen}/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/:levelOne/:leveTwo/:levelThree' element={<Product/>}></Route>
        <Route path='/product/:productId' element={<ProductDetails/>}></Route>
        <Route path='/deleveryAddress' element={<DeleveryAddressForm/>}></Route>
        <Route path='/checkout/:id' element={<CheckOut/>} ></Route> 
         {/* in above  based on params the address form(which contaiins addresses also) or order summery page will get displayd */}
        <Route path='/product/order' element={<Order/>} ></Route>
        <Route path='/payment/:id' element={"payement successful"}  ></Route>


      </Routes>

      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default CustomerRoutes
