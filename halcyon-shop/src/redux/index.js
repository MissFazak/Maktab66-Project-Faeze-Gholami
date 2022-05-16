import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import itemsReducer from './productSlice'

export const store = configureStore({
  devTools:true,
  reducer:{
      user:userReducer,
      items:itemsReducer
      // product:productReducer
  }
})