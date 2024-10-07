import { Link } from 'react-router-dom'
import styles from './Cart.module.css'

function CartEmpty() {
    return (
        <div className={styles.emptyCartMain}>
            <div className={styles.emptyCartText}>
                <h1>Your cart is empty</h1>
                <h3>
                    If you add something to your cart, it will appear here. Want
                    to start now?
                </h3>
                <Link to="/perfumes" relative="path">
                    <button className={styles.emptyCartButton}>Go back</button>
                </Link>
            </div>
        </div>
    )
}

export default CartEmpty
