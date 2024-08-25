import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const perfumesSlice = createSlice({
    initialState,
    name: 'perfumes',
    reducers: {},
})

export const {} = perfumesSlice.actions

export const selectPerffumes = (state) => state.perfumes

export default perfumesSlice.reducer
