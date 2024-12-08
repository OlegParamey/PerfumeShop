import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { selectDeliveryData } from '../../../../redux/slices/deliveryDataSlice'
import { selectCartList } from '../../../../redux/slices/cartSlice'
import CheckoutForm from './CheckoutForm'
import PaymentListItems from './PaymentListItems'
// import MethodPaymentCard from './PaymentMethods/MethodPaymentCard'
// import MethodBlik from './PaymentMethods/MethodBlik'
import MethodGooglePay from './PaymentMethods/MethodGooglePay'
// import MethodGiftCard from './PaymentMethods/MethodGiftCard'
import EditButton from './EditButton'
import styles from './Payment.module.css'
import { Elements } from '@stripe/react-stripe-js'

function PaymentMenu() {
    const deliveryData = useSelector(selectDeliveryData)
    const navigate = useNavigate()
    const itemsList = useSelector(selectCartList)
    const finalPrice = Number(
        itemsList.reduce((accumulator, item) => accumulator + +item.subtotal, 0)
    ).toFixed(2)
    const [stripePromise, setStripePromise] = useState(null)
    const [clientSecret, setClientSecret] = useState('')

    useEffect(() => {
        fetch('http://localhost:4000/config').then(async (r) => {
            const { publishableKey } = await r.json()
            setStripePromise(loadStripe(publishableKey))
        })
    }, [])

    useEffect(() => {
        const amountInCents = finalPrice > 0 ? Math.round(finalPrice * 100) : 0
        fetch('http://localhost:4000/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                currency: 'PLN',
                amount: amountInCents,
            }),
        }).then(async (r) => {
            const { clientSecret } = await r.json()
            setClientSecret(clientSecret)
        })
    }, [finalPrice])

    useEffect(() => {
        if (deliveryData.email.length <= 0) {
            navigate('/perfumes')
        }
    }, [deliveryData, navigate])

    // const handleSubmitForm = (e) => {
    //     e.preventDefault()
    //     console.log('Payment processed successfully!')
    //     alert('Payment processed successfully!')
    // }

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
                    {/* <form onSubmit={handleSubmitForm}>
                        {deliveryData.paymentCard && <MethodPaymentCard />}
                        {deliveryData.blik && <MethodBlik />}
                        {deliveryData.googlePay && (
                            <MethodGooglePay finalPrice={finalPrice} />
                        )}
                        {deliveryData.giftCard && <MethodGiftCard />}
                    </form> */}
                    {stripePromise && clientSecret ? (
                        <div className={styles.payment_form_container}>
                            <MethodGooglePay finalPrice={finalPrice} />
                            <p className={styles.division}>or</p>
                            <Elements
                                stripe={stripePromise}
                                options={{ clientSecret }}
                            >
                                <CheckoutForm />
                            </Elements>
                        </div>
                    ) : (
                        <p>Loading payment methods...</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default PaymentMenu
