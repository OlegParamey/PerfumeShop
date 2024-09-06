import styles from './Cart.module.css'

function CartItemsList({ itemData }) {
    return (
        <div className={styles.cartItem}>
            <img src={itemData.imgSrc} alt={itemData.brand} />
        </div>
    )
}

export default CartItemsList
