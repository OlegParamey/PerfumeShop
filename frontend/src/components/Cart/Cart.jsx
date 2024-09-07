import { useSelector } from 'react-redux'
import { selectCartList } from '../../redux/slices/cartSlice'
import CartListItem from './CartListItem'
import styles from './Cart.module.css'

function Cart() {
    const cartList = useSelector(selectCartList)
    return (
        <>
            <h2>Choosed perfumes</h2>
            <div className={styles.cartList}>
                {cartList &&
                    cartList.map((perfume) => (
                        <CartListItem
                            data={perfume}
                            key={`${perfume.id}${perfume.capacity}`}
                        />
                    ))}
            </div>
        </>
    )
}

export default Cart
