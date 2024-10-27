import { useState } from 'react'
import styles from './InputCheckBox.module.css'

function InputCheckBox({ setPaymentCart, setBlik, setGooglePay, setGiftCard }) {
    const [selectedOption, setSelectedOption] = useState(null)

    const clickHandler = (option) => {
        setSelectedOption(option)
        setPaymentCart(option === 'paymentCart')
        setBlik(option === 'blik')
        setGooglePay(option === 'googlePay')
        setGiftCard(option === 'giftCard')
    }

    return (
        <div>
            <h1>Custom Radio Buttons</h1>
            <div
                className={styles.checkBox}
                onClick={() => clickHandler('paymentCart')}
            >
                <label className={styles.container}>
                    Payment card
                    <input
                        type="radio"
                        name="paymentOption"
                        checked={selectedOption === 'paymentCart'}
                        readOnly
                    />
                    <span className={styles.checkmark}></span>
                    <div className={styles.icons}></div>
                </label>
            </div>
            <div
                className={styles.checkBox}
                onClick={() => clickHandler('blik')}
            >
                <label className={styles.container}>
                    Blik
                    <input
                        type="radio"
                        name="paymentOption"
                        checked={selectedOption === 'blik'}
                        readOnly
                    />
                    <span className={styles.checkmark}></span>
                    <div className={styles.icons}></div>
                </label>
            </div>
            <div
                className={styles.checkBox}
                onClick={() => clickHandler('googlePay')}
            >
                <label className={styles.container}>
                    Google Pay
                    <input
                        type="radio"
                        name="paymentOption"
                        checked={selectedOption === 'googlePay'}
                        readOnly
                    />
                    <span className={styles.checkmark}></span>
                    <div className={styles.icons}></div>
                </label>
            </div>
            <div
                className={styles.checkBox}
                onClick={() => clickHandler('giftCard')}
            >
                <label className={styles.container}>
                    Gift card
                    <input
                        type="radio"
                        name="paymentOption"
                        checked={selectedOption === 'giftCard'}
                        readOnly
                    />
                    <span className={styles.checkmark}></span>
                    <div className={styles.icons}></div>
                </label>
            </div>
        </div>
    )
}

export default InputCheckBox
