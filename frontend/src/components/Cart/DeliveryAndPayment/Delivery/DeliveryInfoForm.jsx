import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectDeliveryData } from '../../../../redux/slices/deliveryDataSlice'
import { setDeliveryData } from '../../../../redux/slices/deliveryDataSlice'
import InputCheckBox from './InputCheckBox'
import styles from './Delivery.module.css'

function DeliveryInfoForm() {
    const handleGoTocheckout = () => {
        navigate('/cart/checkout')
    }

    const deliveryData = useSelector(selectDeliveryData)

    const [email, setEmail] = useState(deliveryData.email)
    const [phoneNumber, setPhoneNumber] = useState(deliveryData.phoneNumber)
    const [name, setName] = useState(deliveryData.name)
    const [surname, setSurname] = useState(deliveryData.surname)
    const [address, setAddress] = useState(deliveryData.address)
    const [optionalDdata, setOptionalDdata] = useState(
        deliveryData.optionalDdata
    )
    const [zipCode, setZipCode] = useState(deliveryData.zipCode)
    const [city, setCity] = useState(deliveryData.city)

    const [paymentCard, setPaymentCard] = useState(deliveryData.paymentCard)
    const [blik, setBlik] = useState(deliveryData.blik)
    const [googlePay, setGooglePay] = useState(deliveryData.googlePay)
    const [giftCard, setGiftCard] = useState(deliveryData.giftCard)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const inputSpaceRemover = (e) =>
        (e.target.value = e.target.value.replace(/ /g, ''))

    const isFormValid = useMemo(
        () =>
            email &&
            phoneNumber &&
            name &&
            surname &&
            address &&
            zipCode &&
            city &&
            (paymentCard || blik || googlePay || giftCard),
        [
            email,
            phoneNumber,
            name,
            surname,
            address,
            zipCode,
            city,
            paymentCard,
            blik,
            googlePay,
            giftCard,
        ]
    )

    const handleSubmitForm = (e) => {
        e.preventDefault()

        dispatch(
            setDeliveryData({
                email,
                phoneNumber,
                name,
                surname,
                address,
                optionalDdata,
                zipCode,
                city,
                paymentCard,
                blik,
                googlePay,
                giftCard,
            })
        )
        handleGoTocheckout()
        // здесь можно добавить логику отправки формы
    }

    return (
        <div className={styles.deliveryForm}>
            <form onSubmit={handleSubmitForm}>
                <div className={styles.deliveryFormHeader}>
                    <h1>Delivery details</h1>
                </div>
                <div className={styles.deliveryFormInputsContainer}>
                    <div className={styles.deliveryFormInput}>
                        <input
                            onInput={(e) => inputSpaceRemover(e)}
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder=" "
                            autoComplete="on"
                            required
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className={styles.deliveryFormInput}>
                        <input
                            onInput={(e) => inputSpaceRemover(e)}
                            type="tel"
                            id="phoneNumber" // Добавляем id
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder=""
                            autoComplete="on"
                            required
                        />
                        <label htmlFor="phoneNumber">Phone number</label>
                    </div>
                </div>
                <div className={styles.deliveryFormInputsContainer}>
                    <div className={styles.deliveryFormInput}>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder=" "
                            autoComplete="on"
                            required
                        />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className={styles.deliveryFormInput}>
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            placeholder=" "
                            autoComplete="on"
                            required
                        />
                        <label htmlFor="surname">Surname</label>
                    </div>
                </div>
                <div className={styles.deliveryFormInputsContainer}>
                    <div className={styles.deliveryFormInput}>
                        <input
                            className={styles.longInput}
                            type="text"
                            id="address"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder=" "
                            autoComplete="on"
                            required
                        />
                        <label className={styles.longLabel} htmlFor="address">
                            Adress
                        </label>
                    </div>
                </div>

                <div className={styles.deliveryFormInputsContainer}>
                    <div className={styles.deliveryFormInput}>
                        <input
                            className={styles.longInput}
                            type="text"
                            id="optionalDdata"
                            name="optionalDdata"
                            value={optionalDdata}
                            onChange={(e) => setOptionalDdata(e.target.value)}
                            autoComplete="on"
                            placeholder=" "
                        />
                        <label
                            className={styles.longLabel}
                            htmlFor="optionalDdata"
                        >
                            Optional Data
                        </label>
                    </div>
                </div>
                <div className={styles.deliveryFormInputsContainer}>
                    <div className={styles.deliveryFormInput}>
                        <input
                            onInput={(e) => inputSpaceRemover(e)}
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            placeholder=" "
                            autoComplete="on"
                            required
                        />
                        <label htmlFor="zipCode">Zip Code</label>
                    </div>
                    <div className={styles.deliveryFormInput}>
                        <input
                            type="text"
                            id="city" // Добавляем id
                            name="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder=" "
                            autoComplete="on"
                            required
                        />
                        <label htmlFor="city">City</label>
                    </div>
                </div>
                <InputCheckBox
                    setPaymentCard={setPaymentCard}
                    setBlik={setBlik}
                    setGooglePay={setGooglePay}
                    setGiftCard={setGiftCard}
                    paymentCard={paymentCard}
                    blik={blik}
                    googlePay={googlePay}
                    giftCard={giftCard}
                />
                <div className={styles.buttonContainer}>
                    <button
                        type="submit"
                        disabled={!isFormValid}
                        className={styles.paymentButton}
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </form>
        </div>
    )
}

export default DeliveryInfoForm
