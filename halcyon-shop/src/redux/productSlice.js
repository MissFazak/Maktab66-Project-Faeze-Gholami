import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const productSlice = createSlice({
    name:"items",
    initialState:{
        items:[]
    },
    reducers:{
        setItems:(state,{payload})=>{
            return {items:[...state.items,...payload]}
        }
        
    }
});

export const {setItems} = productSlice.actions
export const itemsSelector =(state) =>state.items
export default productSlice.reducer

const api = axios.create({
    baseURL:"http://localhost:3002/",
    withCredentials:false,
})

export function fetchItems(){
    return async (disptch)=>{
        api.get("/products").then((res)=>disptch(setItems(res.data)))
        
    }
}