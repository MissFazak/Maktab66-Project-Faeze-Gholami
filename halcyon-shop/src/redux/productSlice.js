import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name:'product',
    initialState:{},
    reducers:{
        setUser:(state,action)=>{
            return action.payload
        },
        logout:state=>{
            return{}
        }
    }
})