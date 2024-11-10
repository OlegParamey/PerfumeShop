import styles from './MethodPaymentCard.module.css'

function MethodPaymentCard() {
    return (
        <div className={styles.credit_card_form}>
            <h2>Payment card data</h2>
            <div className={styles.form_group}>
                <label htmlFor="card-name">Owner's name</label>
                <input
                    className={styles.inputField}
                    type="text"
                    id="card-name"
                    name="card-name"
                    placeholder="Enter the name"
                    required
                />
            </div>
            <div className={styles.form_group}>
                <label htmlFor="card-number">Card number</label>
                <input
                    className={styles.inputField}
                    type="text"
                    id="card-number"
                    name="card-number"
                    placeholder="XXXX XXXX XXXX XXXX"
                    required
                    maxLength="16"
                />
            </div>
            <div className={`${styles.form_group} ${styles.input_group}`}>
                <div>
                    <label htmlFor="card-expiry">Card validity</label>
                    <input
                        className={styles.inputField}
                        type="text"
                        id="card-expiry"
                        name="card-expiry"
                        placeholder="MM/YY"
                        required
                        maxLength="5"
                    />
                </div>
                <div>
                    <label htmlFor="card-cvv">CVV</label>
                    <input
                        className={styles.inputField}
                        type="number"
                        id="card-cvv"
                        name="card-cvv"
                        placeholder="XXX"
                        required
                        maxLength="3"
                    />
                </div>
            </div>
            <button type="submit" className={styles.submitButton}>
                Pay
            </button>
        </div>
    )
}

export default MethodPaymentCard
