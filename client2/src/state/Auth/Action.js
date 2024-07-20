import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, LOGIN_FAILURE,LOGIN_REQUEST,LOGIN_SUCCESS,LOGOUT, GET_USER_SUCCESS, GET_USER_REQUEST, GET_USER_FAILURE } from "./ActionType";
import { API_BASE_URL } from "../../config/apiConfig";
import axios from "axios";
import { colors } from "@mui/material";
import { useSelector } from "react-redux";


const registerRequest = () => ({type:REGISTER_REQUEST})
const registerSuccess = (user) =>({type:REGISTER_SUCCESS, payload:user})
const registerFailure = (error) =>({type:REGISTER_FAILURE, payload:error})

export const register = (userData) => async(dispatch) =>{
    // const {auth} = useSelector(store=>store)
    dispatch(registerRequest())
    try{                          
        const response = await axios.post(`http://localhost:5454/auth/signup`, userData)
        // console.log(response)
        const user = response.data;
        // console.log('user register in redux ' + user);
        if(user.jwt){
            localStorage.setItem('jwt', user.jwt);
        }
        dispatch(registerSuccess(user.jwt));
        // console.log(auth.json());
    }
    catch(e){
        dispatch(registerFailure(e.message));
    }
}


const loginRequest = () => ({type:LOGIN_REQUEST})
const loginSuccess = (user) =>({type:LOGIN_SUCCESS, payload:user})
const loginFailure = (error) =>({type:LOGIN_FAILURE, payload:error})

export const login = (userData) => async(dispatch) =>{
    dispatch(loginRequest())
    try{
        const response = await axios.post(`http://localhost:5454/auth/signin`, userData)
        const user = response.data;
        // console.log(user)
        if(user.jwt){
            localStorage.setItem('jwt', user.jwt);
        }
        // console.log('user loged in redux'+ user)
        dispatch(loginSuccess(user.jwt));
    }
    catch(e){
        dispatch(loginFailure(e.message)); 
    }
}

const token = localStorage.getItem('jwt');
const getUserRequest = () => ({type:GET_USER_REQUEST})
const getUserSuccess = (user) =>({type:GET_USER_SUCCESS, payload:user})
const getUserFailure = (e) => ({type:GET_USER_FAILURE, payload:e})

export const getUser = (jwt) =>async(dispatch) =>{
    dispatch(getUserRequest());
    
    try{
        console.log('we got getUser Req in action')
        const response = await axios.get(`http://localhost:5454/api/users/profile`,{
            headers: {'Authorization' : `Bearer ${jwt}`}
        })
        const user = response.data;
        console.log(response);
        dispatch(getUserSuccess(user));
        // console.log(auth)
    }
    catch(e){
        dispatch(getUserFailure(e.message));
    }
}

export const logout = () => (dispatch)=>{
    dispatch({type:LOGOUT, payload:null})
    localStorage.clear();
}