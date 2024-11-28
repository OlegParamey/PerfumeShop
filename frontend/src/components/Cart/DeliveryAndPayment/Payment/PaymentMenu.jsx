import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { selectDeliveryData } from '../../../../redux/slices/deliveryDataSlice'
import { selectCartList } from '../../../../redux/slices/cartSlice'
import MethodPaymentCard from './PaymentMethods/MethodPaymentCard'
import PaymentListItems from './PaymentListItems'
import MethodBlik from './PaymentMethods/MethodBlik'
import MethodGooglePay from './PaymentMethods/MethodGooglePay'
import MethodGiftCard from './PaymentMethods/MethodGiftCard'
import EditButton from './EditButton'
import styles from './Payment.module.css'

function PaymentMenu() {
    const deliveryData = useSelector(selectDeliveryData)
    const navigate = useNavigate()
    const itemsList = useSelector(selectCartList)
    const finalPrice = itemsList.reduce(
        (accumulator, item) => accumulator + +item.subtotal,
        0
    )

    useEffect(() => {
        if (deliveryData.email.length <= 0) {
            navigate('/perfumes')
        }
    }, [deliveryData, navigate])

    const handleSubmitForm = (e) => {
        e.preventDefault()
        console.log('Payment processed successfully!')
        alert('Payment processed successfully!')
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
                            <EditButton />
                        </div>
                        <div className={styles.group}>
                            <h2>ADDRESS</h2>
                            <p>{deliveryData.name}</p>
                            <p>{deliveryData.surname}</p>
                            <p>{deliveryData.address}</p>
                            <p>{deliveryData.zipCode}</p>
                            <p>{deliveryData.city}</p>
                            <EditButton />
                        </div>
                    </div>
                    <div className={styles.itemListContainer}>
                        <PaymentListItems
                            finalPrice={finalPrice}
                            itemsList={itemsList}
                        />
                    </div>
                </div>
                <div className={styles.methodContainer}>
                    <form onSubmit={handleSubmitForm}>
                        {deliveryData.paymentCard && <MethodPaymentCard />}
                        {deliveryData.blik && <MethodBlik />}
                        {deliveryData.googlePay && (
                            <MethodGooglePay finalPrice={finalPrice} />
                        )}
                        {deliveryData.giftCard && <MethodGiftCard />}
                    </form>
                </div>
            </div>
        </>
    )
}

export default PaymentMenu
