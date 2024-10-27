import MethodPaymentCard from './PaymentMethods/MethodPaymentCard'
import { useSelector } from 'react-redux'
import { selectDeliveryData } from '../../../../redux/slices/deliveryDataSlice'
import styles from './Payment.module.css'
import MethodBlik from './PaymentMethods/MethodBlik'
import MethodGooglePay from './PaymentMethods/MethodGooglePay'
import MethodGiftCard from './PaymentMethods/MethodGiftCard'

function PaymentMenu() {
    const deliveryData = useSelector(selectDeliveryData)

    console.log(deliveryData)

    const handleSubmitForm = (e) => {
        e.preventDefault()
        // Дополнительная логика отправки формы
    }

    return (
        <div className={styles.paymentMenu}>
            <div className={styles.infoContainer}>
                {Object.entries(deliveryData).map(([key, value]) => {
                    if (
                        value &&
                        typeof value === 'string' &&
                        value.length !== undefined
                    ) {
                        return (
                            <h1 key={key}>
                                {key}: {value}
                            </h1>
                        )
                    }
                    return null
                })}
            </div>
            <div className={styles.methodContainer}>
                <form onSubmit={handleSubmitForm}>
                    {deliveryData.paymentCart && <MethodPaymentCard />}
                    {deliveryData.blik && <MethodBlik />}
                    {deliveryData.googlePay && <MethodGooglePay />}
                    {deliveryData.giftCard && <MethodGiftCard />}
                    <button type="submit" className={styles.submitButton}>
                        Submit Payment
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PaymentMenu
