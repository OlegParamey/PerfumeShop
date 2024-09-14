import { createSlice } from '@reduxjs/toolkit'
import ProductIdentification from '../../utils/ProductIdentification'

const initialState = []

const cartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        addPerfumeToCart: (state, action) => {
            if (!state.some((obj) => ProductIdentification(obj, action))) {
                return [...state, action.payload]
            }

            return [
                ...state.map((obj) => {
                    if (ProductIdentification(obj, action)) {
                        return {
                            ...obj,
                            quantity: obj.quantity < 10 ? obj.quantity + 1 : 10,
                        }
                    }
                    return obj
                }),
            ]
        },
        setItemQuantity: (state, action) => {
            return [
                ...state.map((obj) => {
                    if (ProductIdentification(obj, action)) {
                        return {
                            ...obj,
                            quantity: +action.payload.quantity,
                            subtotal: obj.price * +action.payload.quantity,
                        }
                    }
                    return obj
                }),
            ]
        },
    },
})

export const { addPerfumeToCart, setItemQuantity } = cartSlice.actions
export const selectCartList = (state) => state.cartItems
export default cartSlice.reducer
