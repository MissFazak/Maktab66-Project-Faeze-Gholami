import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const productSlice = createSlice({
    name:'product',
    initialState:{
        items:[]
    },
    reducers:{
        setItem:(state,action)=>{
            return action.payload
        },
        logout:state=>{
            return{}
        }
    }
})

export const {setItem} = productSlice.actions
export default productSlice.reducer

const api = axios.create({
    baseURL:"http://localhost:3002/"
})