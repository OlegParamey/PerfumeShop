import { PaymentElement } from '@stripe/react-stripe-js'
import { useState } from 'react'
import { useStripe, useElements } from '@stripe/react-stripe-js'

export default function CheckoutForm({ deliveryData, itemsList }) {
    const stripe = useStripe()
    const elements = useElements()

    const [message, setMessage] = useState(null)
    const [isProcessing, setIsProcessing] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return
        }

        setIsProcessing(true)

        try {
            const response = await fetch(
                'http://localhost:4000/submit-delivery-form',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ deliveryData, itemsList }),
                }
            )
            setTimeout(() => {}, 3000)

            if (!response.ok) {
                throw new Error('Failed to send data to the server')
            }

            const result = await response.json()
            console.log('Server response:', result)
        } catch (err) {
            console.error('Error sending data to server:', err)
            setMessage('Payment succeeded, but failed to notify the server.')
        }

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                //http://localhost:3000/completion
                return_url: `${window.location.origin}/completion`,
            },
            redirect: 'if_required',
        })

        if (error) {
            setMessage(error.message)
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {
            setMessage('Payment status: ' + paymentIntent.status + ' ;)')
        } else {
            setMessage('An unexpected error occured.')
        }

        setIsProcessing(false)
    }

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <PaymentElement
                id="payment-element"
                options={{ layout: 'accordion' }}
            />
            <button disabled={isProcessing || !stripe || !elements} id="submit">
                <span id="button-text">
                    {isProcessing ? 'Processing ... ' : 'Pay now'}
                </span>
            </button>
            {/* Show any error or success messages ///////////////////////////////////////////////////*/}
            {message && <div id="payment-message">{message}</div>}
        </form>
    )
}
