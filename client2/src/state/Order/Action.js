
import { useNavigate } from "react-router-dom"
import { api } from "../../config/apiConfig"
import { CREATE_ORDER_FAILURE, CREATE_ORDER_SUCCESS, GET_ORDER_FAILURE, GET_ORDER_REQUEST, GET_ORDER_SUCCESS } from "./ActionType"
 
export const createOrder = (address) =>async(dispatch) =>{
    dispatch({type: 'CREATE_ORDER_REQUEST'})
    try{
        console.log('in action of order , address= ', address)
        const {data} = await api.post('/api/orders', address)  // we will get createdOrder here
        console.log('in action of order , order= ', data)
        dispatch({type:CREATE_ORDER_SUCCESS, payload:data})
        console.log('result of shipping add = ', data?.shippingAddress)
        // if(data._id){
        //     console.log('in action of order, data._id = ', data._id )
            
        // }
        
    }
    catch(e){
        dispatch({type: CREATE_ORDER_FAILURE, payload:e.message})
    }
}

export const getOrderById = (orderId) => async(dispatch) =>{
    dispatch({type: GET_ORDER_REQUEST})
    try {
        const {data} = await api.get(`/api/orders/${orderId}`)
        dispatch({type:GET_ORDER_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:GET_ORDER_FAILURE, payload:error.message})
    }

}