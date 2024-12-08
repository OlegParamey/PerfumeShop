// import { useNavigate } from 'react-router-dom'
import GooglePayButton from '@google-pay/button-react'
import styles from './Methods.module.css'

function MethodGooglePay({ finalPrice }) {
    // const navigate = useNavigate()
    const formattedPrice = parseFloat(finalPrice).toFixed(2)
    return (
        <div className={styles.credit_card_form}>
            {/* <div>
                <img
                    src="/icons/google-pay.svg"
                    alt="Google Pay"
                    width="100px"
                ></img>
            </div> */}

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
                    //navigate('/') можно сюда добавить переадрисацию на страницу благодарности за покупку
                }}
            />
        </div>
    )
}

export default MethodGooglePay
