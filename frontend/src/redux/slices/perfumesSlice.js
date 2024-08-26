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
    selectors: {
        selectPerffumes: (state, action) => state,
    },
})

export const { addPerfume, getPerfumeList } = perfumesSlice.actions

export const { selectPerffumes } = perfumesSlice.selectors

export default perfumesSlice.reducer
