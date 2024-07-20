export const API_BASE_URL = 'http://localhost:5454';
import axios from 'axios'
const jwt = localStorage.getItem('jwt')
export const api = axios.create({
    baseURL: API_BASE_URL,
    headers:{
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${jwt}`
    }
})