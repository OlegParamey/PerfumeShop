import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const perfumesSlice = createSlice({
    initialState,
    name: 'perfumes',
    reducers: {
        getPerfumeList: (state, action) => {
            return action.payload
        },
        addPerfume: (state, action) => {
            return state.push(action.payload)
        },
    },
})

export const { addPerfume, getPerfumeList } = perfumesSlice.actions

export const selectPerffumes = (state) => state.perfumes

export default perfumesSlice.reducer
