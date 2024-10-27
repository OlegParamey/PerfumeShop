import { configureStore } from '@reduxjs/toolkit'
import perfumesReducer from './slices/perfumesSlice'
import cartReducer from './slices/cartSlice'
import deliveryReducer from './slices/deliveryDataSlice'

const store = configureStore({
    reducer: {
        perfumes: perfumesReducer,
        cartItems: cartReducer,
        deliveryData: deliveryReducer,
    },
})

export default store
