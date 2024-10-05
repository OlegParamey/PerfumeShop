import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sortBy: '',
    title: [],
    brand: [],
    capacity: [],
    price: { from: 0, to: 0 },
}

const instanceCheck = (state, action, property) => {
    if (!action.payload) return
    // Если элемент уже в массиве, удаляем его
    if (state[property].includes(action.payload)) {
        state[property] = state[property].filter(
            (item) => item !== action.payload
        )
    } else {
        // Иначе добавляем элемент
        state[property].push(action.payload)
    }
}

const filterSlice = createSlice({
    initialState,
    name: 'filter',
    reducers: {
        setSortBy: (state, action) => (state.sortBy = action.payload),

        setTitle: (state, action) => instanceCheck(state, action, 'title'),

        setBrand: (state, action) => instanceCheck(state, action, 'brand'),

        setCapacity: (state, action) =>
            instanceCheck(state, action, 'capacity'),

        setPrice: (state, action) => {
            state.price.from = action.payload.price.from
            state.price.to = action.payload.price.to
        },

        resetFilter: (state) => {
            state.sortBy = initialState.sortBy
            state.title = []
            state.brand = []
        },
    },
})

export const {
    setSortBy,
    setTitle,
    setBrand,
    resetFilter,
    setPrice,
    setCapacity,
} = filterSlice.actions

export const selectFilterList = (state) => state.filter
export const selectFilterBrand = (state) => state.filter.brand
export const selectFilterTitle = (state) => state.filter.title
export const selectFilterCapacity = (state) => state.filter.capacity
export default filterSlice.reducer
