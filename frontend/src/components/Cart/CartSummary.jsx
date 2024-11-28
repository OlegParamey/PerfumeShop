import styles from './Cart.module.css'

function CartSummary({ finalPrice }) {
    return (
        <div className={styles.cartSummary}>
            <p>Overall</p>
            <p>{finalPrice}.00 zł</p>
        </div>
    )
}

export default CartSummary
