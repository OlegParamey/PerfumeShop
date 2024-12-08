import { useState } from 'react'
import styles from './Methods.module.css'

function MethodPaymentCard() {
    const [cardNumber, setCardNumber] = useState('')
    const [cardExpiry, setCardExpiry] = useState('')
    const [errors, setErrors] = useState({ cardExpiry: '', cardNumber: '' })

    const validateCardExpiry = (month, year) => {
        const currentYear = new Date().getFullYear() % 100
        const currentMonth = new Date().getMonth() + 1

        // Check if month is valid
        if (month < 1 || month > 12) return 'Invalid month'

        // Check if year is valid
        if (year < currentYear || year > currentYear + 10) return 'Invalid year'

        // Check if the card has expired
        if (year === currentYear && month < currentMonth) return 'Card expired'

        return ''
    }

    const handleInputCardNumberChange = (event) => {
        let value = event.target.value.replace(/\D/g, '')
        if (value.length > 4) {
            value = value.match(/.{1,4}/g).join(' ')
        }
        setCardNumber(value)
    }

    const handleInputCardExpiryChange = (event) => {
        let value = event.target.value.replace(/\D/g, '')
        let month = value.slice(0, 2)
        let year = value.slice(2, 4)

        // Validate input
        if (month) {
            const numericMonth = parseInt(month, 10)
            if (numericMonth < 1) month = '01'
            else if (numericMonth > 12) month = '12'
        }

        if (year) {
            const numericYear = parseInt(year, 10)
            if (numericYear < 0 || numericYear > 99) {
                year = ''
            }
        }

        // Add slash when length exceeds 2
        if (value.length > 2) {
            value = `${month}/${year}`
        } else {
            value = month
        }

        // Validate expiry date
        const error = validateCardExpiry(
            parseInt(month, 10),
            parseInt(year, 10)
        )
        setErrors((prev) => ({ ...prev, cardExpiry: error }))

        setCardExpiry(value)
    }

    return (
        <div className={styles.credit_card_form}>
            <h2>Payment card data</h2>
            <div className={styles.icons}>
                <img src="/icons/master-card.svg" alt="Master card"></img>
                <img
                    src="/icons/american-express.svg"
                    alt="American express"
                ></img>
                <img src="/icons/maestro.svg" alt="Maestro"></img>
                <img src="/icons/visa.svg" alt="Visa"></img>
            </div>
            <div className={styles.form_group}>
                <label htmlFor="card-name">Owner's name</label>
                <input
                    className={styles.inputField}
                    type="text"
                    id="card-name"
                    name="card-name"
                    placeholder="Enter the name"
                    required
                    aria-label="Enter the cardholder's name"
                />
            </div>
            <div className={styles.form_group}>
                <label htmlFor="card-number">Card number</label>
                <input
                    className={styles.inputField}
                    value={cardNumber}
                    onChange={(e) => handleInputCardNumberChange(e)}
                    type="text"
                    id="card-number"
                    name="card-number"
                    placeholder="XXXX XXXX XXXX XXXX"
                    required
                    maxLength="19"
                    aria-label="Enter the card number"
                />
                {errors.cardNumber && (
                    <small className={styles.error}>{errors.cardNumber}</small>
                )}
            </div>
            <div className={`${styles.form_group} ${styles.input_group}`}>
                <div>
                    <label htmlFor="card-expiry">Card validity</label>
                    <input
                        className={styles.inputField}
                        value={cardExpiry}
                        onChange={(e) => handleInputCardExpiryChange(e)}
                        type="text"
                        id="card-expiry"
                        name="card-expiry"
                        placeholder="MM/YY"
                        required
                        maxLength="5"
                        aria-label="Enter the expiry date (MM/YY)"
                    />
                    {errors.cardExpiry && (
                        <small className={styles.error}>
                            {errors.cardExpiry}
                        </small>
                    )}
                </div>
                <div>
                    <label htmlFor="card-cvv">CVV</label>
                    <input
                        className={styles.inputField}
                        type="text"
                        id="card-cvv"
                        onInput={(e) => {
                            if (e.target.value.length > 4) {
                                e.target.value = e.target.value.slice(0, 4)
                            }
                        }}
                        name="card-cvv"
                        placeholder="XXX or XXXX"
                        required
                        pattern="\d{3,4}"
                        aria-label="Enter the CVV"
                    />
                </div>
            </div>
            <button
                type="submit"
                className={styles.submitButton}
                disabled={!!errors.cardExpiry}
            >
                Pay
            </button>
        </div>
    )
}

export default MethodPaymentCard
