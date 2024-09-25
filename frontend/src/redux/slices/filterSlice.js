import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sortBy: '',
    title: [],
    brand: [],
    price: { from: 0, to: 0 },
}

const filterSlice = createSlice({
    initialState,
    name: 'filter',
    reducers: {
        setSortBy: () => {},
        setTitle: () => {},
        setBrand: () => {},
        resetFilter: () => initialState,
    },
})

export const { setSortBy, setTitle, setBrand, resetFilter } =
    filterSlice.actions
export default filterSlice.reducer
