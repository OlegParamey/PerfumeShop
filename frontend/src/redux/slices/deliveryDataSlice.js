import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: '',
    phoneNumber: '',
    name: '',
    surname: '',
    address: '',
    optionalDdata: '',
    zipCode: '',
    city: '',
    paymentCard: false,
    blik: false,
    googlePay: false,
    giftCard: false,
}

const deliverySlice = createSlice({
    initialState,
    name: 'deliveryData',
    reducers: {
        setDeliveryData: (state, action) => {
            return { ...action.payload }
        },
        // setPhoneNumber: (state, action) => {
        //     return { ...state, phoneNumber: action.payload }
        // },
        // setName: (state, action) => {
        //     return { ...state, name: action.payload }
        // },
        // setSurname: (state, action) => {
        //     return { ...state, surname: action.payload }
        // },
        // setAddress: (state, action) => {
        //     return { ...state, address: action.payload }
        // },
        // setOptionalDdata: (state, action) => {
        //     return { ...state, optionalDdata: action.payload }
        // },
        // setZipCode: (state, action) => {
        //     return { ...state, zipCode: action.payload }
        // },
        // setCity: (state, action) => {
        //     return { ...state, city: action.payload }
        // },
        // setPaymentCart: (state, action) => {
        //     return {
        //         ...state,
        //         paymentCard: action.payload,
        //         blik: false,
        //         googlePay: false,
        //         giftCard: false,
        //     }
        // },
        // setBlik: (state, action) => {
        //     return {
        //         ...state,
        //         paymentCard: false,
        //         blik: action.payload,
        //         googlePay: false,
        //         giftCard: false,
        //     }
        // },
        // setGooglePay: (state, action) => {
        //     return {
        //         ...state,
        //         paymentCard: false,
        //         blik: false,
        //         googlePay: action.payload,
        //         giftCard: false,
        //     }
        // },
        // setGiftCard: (state, action) => {
        //     return {
        //         ...state,
        //         paymentCard: false,
        //         blik: false,
        //         googlePay: false,
        //         giftCard: action.payload,
        //     }
        // },
    },
})

export const {
    setDeliveryData,
    setAddress,
    setBlik,
    setCity,
    setGiftCard,
    setGooglePay,
    setName,
    setOptionalDdata,
    setPaymentCard,
    setPhoneNumber,
    setSurname,
    setZipCode,
} = deliverySlice.actions
export const selectDeliveryData = (state) => state.deliveryData
export default deliverySlice.reducer
