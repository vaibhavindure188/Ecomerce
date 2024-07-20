import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_FAILURE, GET_ORDER_REQUEST, GET_ORDER_SUCCESS } from "./ActionType"

const initialState = {
    orders : [],
    loading: false,
    error: null,
    order : null,
    shippingAddress: null
}

export const orderReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_ORDER_REQUEST:
            case CREATE_ORDER_REQUEST:
                return {...state, loading:true,error:null}
        case GET_ORDER_SUCCESS:
            return {...state, loading:false, loading:false}
        
        case CREATE_ORDER_SUCCESS:
            return {...state,shippingAddress: action.payload?.shippingAddress, orders:action.payload?.orderItems, order : action.payload, loading:false, order:action.payload, loading:false}
        
        case GET_ORDER_FAILURE:
            case CREATE_ORDER_FAILURE:
                return {...state, loading:false, error:action.payload}
        default: return state;
    }
}