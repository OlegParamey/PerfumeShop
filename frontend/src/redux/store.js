import { configureStore } from '@reduxjs/toolkit'
import perfumesReducer from './slices/perfumesSlice'
import cartReducer from './slices/cartSlice'
import filterReducer from './slices/filterSlice'

const store = configureStore({
    reducer: {
        perfumes: perfumesReducer,
        cartItems: cartReducer,
        filter: filterReducer,
    },
})

export default store
