import { useState } from 'react'
import styles from './InputCheckBox.module.css'

function InputCheckBox({
    setPaymentCard,
    setBlik,
    setGooglePay,
    setGiftCard,
    paymentCard,
    blik,
    googlePay,
    giftCard,
}) {
    const [selectedOption, setSelectedOption] = useState(
        paymentCard
            ? 'paymentCard'
            : blik
            ? 'blik'
            : googlePay
            ? 'googlePay'
            : giftCard
            ? 'giftCard'
            : null
    )

    const clickHandler = (option) => {
        setSelectedOption(option)
        setPaymentCard(option === 'paymentCard')
        setBlik(option === 'blik')
        setGooglePay(option === 'googlePay')
        setGiftCard(option === 'giftCard')
    }

    return (
        <div>
            <div
                className={styles.checkBox}
                onClick={() => clickHandler('paymentCard')}
            >
                <label className={styles.container}>
                    Payment card
                    <input
                        type="radio"
                        name="paymentOption"
                        checked={selectedOption === 'paymentCard'}
                        readOnly
                    />
                    <span className={styles.checkmark}></span>
                    <div className={styles.icons}>
                        <img
                            src="/icons/master-card.svg"
                            alt="Master card"
                        ></img>
                        <img
                            src="/icons/american-express.svg"
                            alt="American express"
                        ></img>
                        <img src="/icons/maestro.svg" alt="Maestro"></img>
                        <img src="/icons/visa.svg" alt="Visa"></img>
                    </div>
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
                    <div className={styles.icons}>
                        <img
                            src="/icons/blik.svg"
                            alt="Blik"
                            style={{ margin: '10px 0' }}
                        ></img>
                    </div>
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
                    <div className={styles.icons}>
                        <img
                            src="/icons/google-pay.svg"
                            alt="Google Pay"
                            width="42px"
                        ></img>
                    </div>
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
                    <div className={styles.icons}>
                        <img
                            src="/icons/gift-card.svg"
                            alt="Gift card"
                            width="36px"
                        ></img>
                    </div>
                </label>
            </div>
        </div>
    )
}

export default InputCheckBox
