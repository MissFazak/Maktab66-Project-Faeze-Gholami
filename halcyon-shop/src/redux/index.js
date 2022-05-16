import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import itemsReducer from './productSlice'
import orderReducer from './orderSlice'

export const store = configureStore({
  devTools:true,
  reducer:{
      user:userReducer,
      items:itemsReducer,
      orders:orderReducer
      // product:productReducer
  }
})