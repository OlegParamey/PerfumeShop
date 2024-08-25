import { configureStore } from '@reduxjs/toolkit'
import perfumesReducer from './slices/perfumesSlice'

const store = configureStore({
    reducer: {
        perfumes: perfumesReducer,
    },
})

export default store
