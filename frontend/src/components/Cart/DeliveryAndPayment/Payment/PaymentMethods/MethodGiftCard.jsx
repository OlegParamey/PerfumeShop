import styles from './Methods.module.css'

function MethodGiftCard() {
    return (
        <div className={styles.credit_card_form}>
            <h2>Gift Card Code</h2>
            <div>
                <img
                    src="/icons/gift-card.svg"
                    alt="Gift Card"
                    width="50px"
                ></img>
            </div>

            <button type="submit" className={styles.submitButton}>
                Confirm
            </button>
        </div>
    )
}

export default MethodGiftCard
