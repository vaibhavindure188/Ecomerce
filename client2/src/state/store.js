import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import {thunk} from 'redux-thunk'
import { authReducer } from './Auth/Reducer'
import { customerProductReducer } from './Product/Reducer'
import { orderReducer } from './Order/Reducer'
import { cartReducer } from './Cart/Reducer'

const rootReducer = combineReducers({
   auth : authReducer,
   product : customerProductReducer,
   order : orderReducer,
   cart: cartReducer
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
