import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const deliverySlice = createSlice({
    initialState,
    name: 'deliveryData',
    reducers: {
        setDeliveryData: (state, action) => {
            return { ...action.payload }
        },
    },
})

export const { setDeliveryData } = deliverySlice.actions
export const selectDeliveryData = (state) => state.deliveryData
export default deliverySlice.reducer
