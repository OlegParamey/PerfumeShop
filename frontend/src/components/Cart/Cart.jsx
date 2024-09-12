import { useSelector } from 'react-redux'
import { selectCartList } from '../../redux/slices/cartSlice'
import styles from './Cart.module.css'
import CartListsItem from './CartListsItem'
import CartSummary from './CartSummary'

function Cart() {
    const cartList = useSelector(selectCartList)
    const finalPrice = cartList.reduce(
        (accumulator, perfume) => accumulator + +perfume.price,
        0
    )
    return (
        <>
            <div className={styles.cartHeader}>
                <h2>Cart</h2>
            </div>
            <div className={styles.cartList}>
                {cartList.length > 0 &&
                    cartList.map((perfume) => (
                        <CartListsItem
                            data={perfume}
                            key={`${perfume.productId}`}
                        />
                    ))}
                {cartList.length > 0 && <CartSummary finalPrice={finalPrice} />}
            </div>
        </>
    )
}

export default Cart
