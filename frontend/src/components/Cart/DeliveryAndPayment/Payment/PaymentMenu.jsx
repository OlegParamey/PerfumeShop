import MethodPaymentCard from './PaymentMethods/MethodPaymentCard'
import { useSelector } from 'react-redux'
import { selectDeliveryData } from '../../../../redux/slices/deliveryDataSlice'
import styles from './Payment.module.css'
import PaymentListItem from './PaymentListItem'
import MethodBlik from './PaymentMethods/MethodBlik'
import MethodGooglePay from './PaymentMethods/MethodGooglePay'
import MethodGiftCard from './PaymentMethods/MethodGiftCard'

function PaymentMenu() {
    const deliveryData = useSelector(selectDeliveryData)

    const handleSubmitForm = (e) => {
        e.preventDefault()
        // Дополнительная логика отправки формы
    }

    return (
        <>
            <div>
                <h1>FINALIZATION OF THE ORDER</h1>
            </div>
            <div className={styles.paymentMenu}>
                <div className={styles.infoContainer}>
                    <div>
                        <div className={styles.group}>
                            <h2>CONTACTS</h2>
                            <p>{deliveryData.email}</p>
                            <p>{deliveryData.phoneNumber}</p>
                        </div>
                        <div className={styles.group}>
                            <h2>ADDRESS</h2>
                            <p>{deliveryData.name}</p>
                            <p>{deliveryData.surname}</p>
                            <p>{deliveryData.address}</p>
                            <p>{deliveryData.zipCode}</p>
                            <p>{deliveryData.city}</p>
                        </div>
                    </div>
                    <div className={styles.itemListContainer}>
                        <PaymentListItem />
                    </div>
                </div>
                <div className={styles.methodContainer}>
                    <form onSubmit={handleSubmitForm}>
                        {deliveryData.paymentCard && <MethodPaymentCard />}
                        {deliveryData.blik && <MethodBlik />}
                        {deliveryData.googlePay && <MethodGooglePay />}
                        {deliveryData.giftCard && <MethodGiftCard />}
                    </form>
                </div>
            </div>
        </>
    )
}

export default PaymentMenu
