import { useSelector } from 'react-redux'
import { selectCartList } from '../../redux/slices/cartSlice'
import CartListsItem from './CartListsItem'
import CartSummary from './CartSummary'
import CartEmpty from './CartEmpty'
import DeliveryInfoForm from './DeliveryAndPayment/Delivery/DeliveryInfoForm'
import styles from './Cart.module.css'

function Cart() {
    const cartList = useSelector(selectCartList)
    const finalPrice = cartList.reduce(
        (accumulator, perfume) => accumulator + +perfume.subtotal,
        0
    )

    return (
        <>
            <div className={styles.cartHeader}>
                <h2>Cart</h2>
            </div>

            <div className={styles.cartMain}>
                {cartList.length > 0 ? (
                    <>
                        <div
                            className={
                                cartList.length > 0 ? styles.cartList : ''
                            }
                        >
                            {cartList.map((perfume) => (
                                <CartListsItem
                                    data={perfume}
                                    key={`${perfume.productId}`}
                                />
                            ))}
                            <CartSummary finalPrice={finalPrice} />
                        </div>
                        <DeliveryInfoForm />
                    </>
                ) : (
                    <CartEmpty />
                )}
            </div>
        </>
    )
}

export default Cart
