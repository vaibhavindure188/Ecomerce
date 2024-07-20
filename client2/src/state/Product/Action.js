import { api } from "../../config/apiConfig";
import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType"

export const findProducts = (reqData) =>async(dispatch) =>{
    dispatch({type:FIND_PRODUCTS_REQUEST})
    const {colors, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize} = reqData;
    try{
        // console.log('minDiscount = ', minDiscount)
        const {data} = await api.get(`/api/products?color=${colors}&sizes=${sizes}&minPrice=${minPrice}
            &maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)  // data will not be getting because we have note passed data arguagemtn
            // console.log(data)
            dispatch({type:FIND_PRODUCTS_SUCCESS, payload:data})
    }
    catch(e){
        dispatch({type: FIND_PRODUCTS_FAILURE, payload: e.message})
    }
}

export const findProductById = (reqData) => async(dispatch) =>{
    // dispatch({type: FIND_PRODUCT_BY_ID_REQUEST})
    const {productId} = reqData;
    // console.log(productId)
    try{
        const {data} = await api.get(`/api/products/id/${productId}`)
        // console.log(data)
        dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS, payload:data})
    }
    catch(e){
        dispatch({type:FIND_PRODUCT_BY_ID_FAILURE, payload:e.message})
    }
}