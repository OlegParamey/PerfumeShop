import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import InputCheckBox from './InputCheckBox'
import { setDeliveryData } from '../../../../redux/slices/deliveryDataSlice'
import styles from './Delivery.module.css'

function DeliveryInfoForm() {
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [address, setAddress] = useState('')
    const [optionalDdata, setOptionalDdata] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [city, setCity] = useState('')

    const [paymentCart, setPaymentCart] = useState(false)
    const [blik, setBlik] = useState(false)
    const [googlePay, setGooglePay] = useState(false)
    const [giftCard, setGiftCard] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isFormValid = useMemo(
        () =>
            email &&
            phoneNumber &&
            name &&
            surname &&
            address &&
            zipCode &&
            city &&
            (paymentCart || blik || googlePay || giftCard),
        [
            email,
            phoneNumber,
            name,
            surname,
            address,
            zipCode,
            city,
            paymentCart,
            blik,
            googlePay,
            giftCard,
        ]
    )

    const handleSubmitForm = (e) => {
        e.preventDefault()
        const deliveryData = {
            email,
            phoneNumber,
            name,
            surname,
            address,
            optionalDdata,
            zipCode,
            city,
            paymentCart,
            blik,
            googlePay,
            giftCard,
        }
        dispatch(setDeliveryData(deliveryData))
        handleGoToPayment()
        // здесь можно добавить логику отправки формы
    }
    const handleGoToPayment = () => {
        navigate('/cart/payment')
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
                            id="adress"
                            name="adress"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder=" "
                            autoComplete="on"
                            required
                        />
                        <label className={styles.longLabel} htmlFor="adress">
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
                    setPaymentCart={setPaymentCart}
                    setBlik={setBlik}
                    setGooglePay={setGooglePay}
                    setGiftCard={setGiftCard}
                />
                <div className={styles.buttonContainer}>
                    <button
                        type="submit"
                        disabled={!isFormValid}
                        className={styles.paymentButton}
                    >
                        Proceed to Payment
                    </button>
                </div>
            </form>
        </div>
    )
}

export default DeliveryInfoForm
