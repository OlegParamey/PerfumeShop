import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { selectCartList } from '../redux/slices/cartSlice'
import { selectDeliveryData } from '../redux/slices/deliveryDataSlice'
import CartEmpty from '../components/Cart/CartEmpty'
import PaymentListItems from '../components/Cart/DeliveryAndPayment/Payment/PaymentListItems'
import EditButton from '../components/Cart/DeliveryAndPayment/Payment/EditButton'
import styles from '../components/Cart/Cart.module.css'

function CartLayout() {
    const cartList = useSelector(selectCartList)
    const finalPrice = Number(
        cartList.reduce((accumulator, item) => accumulator + +item.subtotal, 0)
    ).toFixed(2)
    const deliveryData = useSelector(selectDeliveryData)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (!cartList.length > 0) {
            navigate('/cart')
        }
    }, [cartList, navigate])

    return (
        <>
            {location.pathname === '/cart' ? (
                <div className={styles.cartHeader}>
                    <h2>CART</h2>
                </div>
            ) : (
                <div className={styles.cartHeader}>
                    <h2>FINALIZATION OF THE ORDER</h2>
                </div>
            )}

            <div className={styles.cartMain}>
                {cartList.length > 0 ? (
                    <>
                        <div
                            className={
                                cartList.length > 0 ? styles.cartList : ''
                            }
                        >
                            {location.pathname !== '/cart' && (
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
                                </div>
                            )}

                            <PaymentListItems
                                cartList={cartList}
                                finalPrice={finalPrice}
                            />
                        </div>
                        <Outlet />
                    </>
                ) : (
                    <CartEmpty />
                )}
            </div>
        </>
    )
}

export default CartLayout
