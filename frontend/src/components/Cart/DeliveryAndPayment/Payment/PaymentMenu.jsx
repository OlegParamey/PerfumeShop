import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { selectDeliveryData } from '../../../../redux/slices/deliveryDataSlice'
import { selectCartList } from '../../../../redux/slices/cartSlice'
import CheckoutForm from './CheckoutForm'
import MethodGooglePay from './PaymentMethods/MethodGooglePay'
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

    return (
        <>
            <div className={styles.paymentMenu}>
                <div className={styles.methodContainer}>
                    {stripePromise && clientSecret ? (
                        <div className={styles.payment_form_container}>
                            <MethodGooglePay finalPrice={finalPrice} />
                            <p className={styles.division}>or</p>
                            <Elements
                                stripe={stripePromise}
                                options={{ clientSecret }}
                            >
                                <CheckoutForm
                                    deliveryData={deliveryData}
                                    itemsList={itemsList}
                                />
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
