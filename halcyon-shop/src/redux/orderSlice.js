import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const orderSlice = createSlice({
    name:"orders",
    initialState:{
        orders:[]
    },
    reducers:{
        setOrders:(state,{payload})=>{
            return {orders:[...state.orders,...payload]}
        }
        
    }
});

export const {setOrders} = orderSlice.actions
export const orderSelector =(state) =>state.orders
export default orderSlice.reducer

const api = axios.create({
    baseURL:"http://localhost:3002/",
    withCredentials:false,
})

export function fetchOrder(){
    return async (disptch)=>{
        api.get("orders").then((res)=>disptch(setOrders(res.data)))
        
    }
}