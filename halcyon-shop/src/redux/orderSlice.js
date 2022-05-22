import { createSlice } from "@reduxjs/toolkit";
import tutorialService from "./http";


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
export function fetchOrder(){
    return async (disptch)=>{
        tutorialService.getOrders().then((res)=>disptch(setOrders(res.data)))
        
    }
}