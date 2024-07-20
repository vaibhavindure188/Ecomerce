import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType"

const initialState = {
    products: [],
    product: null,
    loading: false,
    error: null
}

export const customerProductReducer = (state = initialState, action) =>{
    switch(action.type){
        case FIND_PRODUCTS_REQUEST:
            case FIND_PRODUCT_BY_ID_REQUEST:
                return {...state, error: null, loading:true}
        case FIND_PRODUCTS_SUCCESS:
             return {...state, products:action.payload, loading:false, error:null}
        case FIND_PRODUCT_BY_ID_SUCCESS:
            return {...state, product:action.payload, loading:false, error:null}
        case FIND_PRODUCTS_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
            return {...state, error:action.payload, loading:false}
        default: return state
    }
}