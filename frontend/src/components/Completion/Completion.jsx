import { useEffect, useState } from 'react'
import axios from 'axios'
import PaymentListItems from '../Cart/DeliveryAndPayment/Payment/PaymentListItems'
import styles from '../Cart/Cart.module.css'
// import { useNavigate } from 'react-router-dom'

function Completion() {
    const [data, setData] = useState(null)
    const [finalPrice, setFinalPrice] = useState(0)
    const [isComplete, setIsComplete] = useState(false)
    // const navigate = useNavigate()

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(
                    'http://localhost:4000/get-delivery-data'
                )
                setData(res.data)
                setFinalPrice(
                    Number(
                        Object.values(res.data.itemsList).reduce(
                            (accumulator, item) => accumulator + +item.subtotal,
                            0
                        )
                    ).toFixed(2)
                )
            } catch (error) {
                console.error('Failed to fetch perfumes data:', error)
            } finally {
                setIsComplete(true)
            }
        }
        fetchData()
    }, [])

    return (
        <>
            <h1>Thank you! 🎉</h1>
            {isComplete && (
                <div className={styles.group}>
                    <div className={styles.infoContainer}>
                        <div>
                            <div className={styles.group}>
                                <h2>CONTACTS</h2>
                                <p>{data.deliveryData.email}</p>
                                <p>{data.deliveryData.phoneNumber}</p>
                            </div>
                            <div className={styles.group}>
                                <h2>ADDRESS</h2>
                                <p>{data.deliveryData.name}</p>
                                <p>{data.deliveryData.surname}</p>
                                <p>{data.deliveryData.address}</p>
                                <p>{data.deliveryData.zipCode}</p>
                                <p>{data.deliveryData.city}</p>
                            </div>
                        </div>
                    </div>
                    <PaymentListItems
                        cartList={Object.values(data.itemsList)}
                        finalPrice={finalPrice}
                    />
                </div>
            )}
        </>
    )
}

export default Completion
