import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'

export const store = configureStore({
  devTools:true,
  reducer:{
      user:userReducer,
      // product:productReducer
  }
})