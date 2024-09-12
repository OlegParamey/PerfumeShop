import styles from './Cart.module.css'

function CartSummary({ finalPrice }) {
    return (
        <div className={styles.cartSummary}>
            <p>
                Order total: <strong>{finalPrice}</strong> zł
            </p>
        </div>
    )
}

export default CartSummary
