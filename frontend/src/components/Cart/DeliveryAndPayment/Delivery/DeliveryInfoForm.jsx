import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Delivery.module.css'

function DeliveryInfoForm() {
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [adress, setAdress] = useState('')
    const [optionalDdata, setOptionalDdata] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [city, setCity] = useState('')

    const navigate = useNavigate()

    const handleSubmitForm = (e) => {
        e.preventDefault()
        const deliveryData = {
            email,
            phoneNumber,
            name,
            surname,
            adress,
            optionalDdata,
            zipCode,
            city,
        }
        console.log(deliveryData)
        handleGoToPayment()
        // здесь можно добавить логику отправки формы
    }
    const handleGoToPayment = () => {
        navigate('/cart/payment')
    }

    const isFormValid =
        email &&
        phoneNumber &&
        name &&
        surname &&
        adress &&
        optionalDdata &&
        zipCode &&
        city

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
                            autoComplete="off"
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
                            placeholder=" "
                            autoComplete="off"
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
                            autoComplete="off"
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
                            autoComplete="off"
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
                            value={adress}
                            onChange={(e) => setAdress(e.target.value)}
                            placeholder=" "
                            autoComplete="off"
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
                            placeholder=" "
                            autoComplete="off"
                            required
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
                            autoComplete="off"
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
                            autoComplete="off"
                            required
                        />
                        <label htmlFor="city">City</label>
                    </div>
                </div>
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
