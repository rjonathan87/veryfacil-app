import { configureStore } from '@reduxjs/toolkit'
import navReducer from './store/slices/navSlice'

export const stire = configureStore({
  reducer: {
    nav: navReducer,
  }
})