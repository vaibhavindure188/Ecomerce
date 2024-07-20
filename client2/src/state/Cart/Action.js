import { ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_SUCCESS, GET_CART_REQUEST, GET_CART_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, GET_CART_SUCCESS } from '../Cart/ActionType.js'
import {api}  from '../../config/apiConfig.js'

export const addItemToCart = (reqData) => async(dispatch)=> {
    dispatch({type:ADD_ITEM_TO_CART_REQUEST})
    // console.log(reqData)
    try {
        const {data} = await api.put('/api/cart/add',reqData)
        dispatch({type: ADD_ITEM_TO_CART_SUCCESS, payload:data})  // in data there will be a cart (it has cartItems)
        // console.log('in action of cart  :  data = ', data.cartItems.length)
    } catch (error) {
        dispatch({type:ADD_ITEM_TO_CART_FAILURE, payload:error.message})
    }
}

export const getCart = () => async(dispatch)=>{
    dispatch({type:GET_CART_REQUEST})
    try {
        const {data} = await api.get('/api/cart')
        console.log(data)
        dispatch({type:GET_CART_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:GET_CART_FAILURE})
    }
}

export const removeCartItem = (cartItemId) =>async(dispatch)=>{
    dispatch({type:REMOVE_CART_ITEM_REQUEST})
    try {
        console.log('in action of cart, cartItemId = ', cartItemId)
        const {data} = await api.delete(`/api/cartItem/${cartItemId}`)
        console.log('in action of cart, removed cartItem = ', data)
        dispatch({type:REMOVE_CART_ITEM_SUCCESS, payload:data})  // we get deleted cartItem
    } catch (error) {
        dispatch({type:REMOVE_CART_ITEM_FAILURE, payload:error.message}) 
    }
}


export const updateCartItem = (reqdata) =>async(dispatch)=>{
    dispatch({type:UPDATE_CART_ITEM_REQUEST})
    try {
        const {data} = await api.put(`/api/cartItem/${reqdata.cartItemId}`, reqdata) // here we get updated cartItem
        dispatch({type:UPDATE_CART_ITEM_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:UPDATE_CART_ITEM_FAILURE, payload:error.message})
    }
}