import styles from './Cart.module.css'

function CartSummary({ finalPrice }) {
    return (
        <div className={styles.cartSummary}>
            <p>
                Subtotal: <strong>{finalPrice}</strong> zł
            </p>
        </div>
    )
}

export default CartSummary
