import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const cartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        addPerfumeToCart: (state, action) => {
            return [...state, action.payload]
        },
        setItemQuantity: (state, action) => {
            return []
        },
    },
})

export const { addPerfumeToCart, setItemQuantity } = cartSlice.actions
export const selectCartList = (state) => state.cartItems
export default cartSlice.reducer
