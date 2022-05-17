import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const categorySlice = createSlice({
    name:"category",
    initialState:{
        category:[]
    },
    reducers:{
        setCategory:(state,{payload})=>{
            return {category:[...state.category,...payload]}
        }
        
    }
});

export const {setCategory} = categorySlice.actions
export const categorySelector =(state) =>state.category
export default categorySlice.reducer

const api = axios.create({
    baseURL:"http://localhost:3002/",
    withCredentials:false,
})

export function fetchCategory(){
    return async (disptch)=>{
        api.get("/category").then((res)=>disptch(setCategory(res.data)))
        
    }
}