import MethodPaymentCard from './PaymentMethods/MethodPaymentCard'
import styles from './Payment.module.css'

function PaymentMenu() {
    const handleSubmitForm = (e) => {
        e.preventDefault()
    }

    return (
        <div className={styles.paymentMenu}>
            <div className={styles.infoContainer}>
                {/*место под вывод информации о заказе */}
            </div>
            <div className={styles.methodContainer}>
                <form onSubmit={handleSubmitForm}>
                    <MethodPaymentCard />
                </form>
            </div>
        </div>
    )
}

export default PaymentMenu
