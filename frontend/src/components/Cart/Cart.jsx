import { useSelector } from 'react-redux'
import { selectCartList } from '../../redux/slices/cartSlice'
import styles from './Cart.module.css'
import CartListsItem from './CartListsItem'

function Cart() {
    const cartList = useSelector(selectCartList)
    return (
        <>
            <div className={styles.cartHeader}>
                <h2>Cart</h2>
            </div>
            <div className={styles.cartList}>
                {cartList &&
                    cartList.map((perfume) => (
                        <CartListsItem
                            data={perfume}
                            key={`${perfume.id}${perfume.capacity}`}
                        />
                    ))}
            </div>
        </>
    )
}

export default Cart
