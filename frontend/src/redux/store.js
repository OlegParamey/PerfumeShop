import { configureStore } from '@reduxjs/toolkit'
import perfumesReducer from './slices/perfumesSlice'
import cartReducer from './slices/cartSlice'

const store = configureStore({
    reducer: {
        perfumes: perfumesReducer,
        cartItems: cartReducer,
    },
})

export default store
