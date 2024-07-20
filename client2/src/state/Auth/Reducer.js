import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"


const initialState = {
    user : null,
    isLoading : false,
    error : null,
    jwt : null
}

export const authReducer = (state = initialState, action) =>{
    switch(action.type){
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
        case GET_USER_REQUEST:
            return {...state, isLoading:true, error: null}
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return {...state, isLoading:false, error:null,jwt:action.payload}
        case GET_USER_SUCCESS : 
             return {...state, isLoading:false, error:null, user:action.payload}
        case LOGIN_FAILURE:
        case REGISTER_FAILURE:
        case GET_USER_FAILURE:
            return {...state, isLoading:false, error: action.payload}
        case LOGOUT :
            return {...initialState}
        default :
           return state;
    }
}