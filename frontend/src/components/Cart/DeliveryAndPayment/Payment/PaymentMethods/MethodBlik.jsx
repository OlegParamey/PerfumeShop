import { useState } from 'react'
import styles from './Methods.module.css'

function MethodPaymentCard() {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        let value = event.target.value
        value = value.replace(/\D/g, '')

        if (value.length > 3) {
            value = value.slice(0, 3) + '-' + value.slice(3)
        }

        setInputValue(value)
    }

    return (
        <div className={styles.credit_card_form}>
            <h2>Paying with BLIK</h2>
            <img src="/icons/blik.svg" alt="BLIK" width="100px"></img>
            <div className={styles.form_group}>
                <label htmlFor="blik-code">BLIK code</label>
                <input
                    className={`${styles.inputField} ${styles.inputBlik}`}
                    value={inputValue}
                    onChange={(e) => handleInputChange(e)}
                    type="text"
                    id="blik-code"
                    name="blik-code"
                    placeholder="XXX-XXX"
                    maxLength="7"
                    pattern="\d{3}-\d{3}"
                    required
                />
            </div>

            <button type="submit" className={styles.submitButton}>
                Confirm
            </button>
        </div>
    )
}

export default MethodPaymentCard
