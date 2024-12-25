import { useNavigate } from 'react-router-dom'
import GooglePayButton from '@google-pay/button-react'
import { resetCart } from '../../../../../redux/slices/cartSlice'
import styles from './Methods.module.css'
import { useDispatch } from 'react-redux'

function MethodGooglePay({ finalPrice }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const formattedPrice = parseFloat(finalPrice).toFixed(2)
    return (
        <div className={styles.credit_card_form}>
            <GooglePayButton
                environment="TEST"
                paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                        {
                            type: 'CARD',
                            parameters: {
                                allowedAuthMethods: [
                                    'PAN_ONLY',
                                    'CRYPTOGRAM_3DS',
                                ],
                                allowedCardNetworks: [
                                    'MASTERCARD',
                                    'VISA',
                                    'AMEX',
                                ],
                            },
                            tokenizationSpecification: {
                                type: 'PAYMENT_GATEWAY',
                                parameters: {
                                    gateway: 'example',
                                    gatewayMerchantId:
                                        'exampleGatewayMerchantId',
                                },
                            },
                        },
                    ],
                    merchantInfo: {
                        merchantId: '12345678901234567890',
                        merchantName: 'Demo Merchant',
                    },
                    transactionInfo: {
                        totalPriceStatus: 'FINAL',
                        totalPriceLabel: 'Total',
                        totalPrice: formattedPrice,
                        currencyCode: 'PLN',
                        countryCode: 'PL',
                    },
                }}
                onLoadPaymentData={(paymentRequest) => {
                    console.log('load payment data', paymentRequest)
                    //Добавить уведомления для успешного завершения транзакции
                    //!!!!!!!
                    dispatch(resetCart())
                    navigate('/completion')
                }}
            />
        </div>
    )
}

export default MethodGooglePay
