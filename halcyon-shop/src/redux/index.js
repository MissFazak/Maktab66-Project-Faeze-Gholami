import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import itemsReducer from './productSlice'
import orderReducer from './orderSlice'
import categoryReducer from './categorySlice'
import stateReducer from './stateSlice'

export const store = configureStore({
  devTools:true,
  reducer:{
      user:userReducer,
      items:itemsReducer,
      orders:orderReducer,
      category:categoryReducer,
      state:stateReducer,
      
      // product:productReducer
  }
})