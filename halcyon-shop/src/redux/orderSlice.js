import { createSlice } from "@reduxjs/toolkit";
import { api } from "./api";


const orderSlice = createSlice({
    name:"orders",
    initialState:{
        orders:[]
    },
    reducers:{
        setOrders:(state,{payload})=>{
            return {orders:[...payload]}
        }
        
    }
});

export const {setOrders} = orderSlice.actions
export const orderSelector =(state) =>state.orders
export default orderSlice.reducer
const token = localStorage.getItem('token')
export function fetchOrder(){
    return async (disptch)=>{
        api.get("orders",{headers:{token:token}}).then((res)=>disptch(setOrders(res.data)))
        
    }
}