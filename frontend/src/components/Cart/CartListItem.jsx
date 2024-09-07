import styles from './Cart.module.css'

function CartListItem({ data }) {
    return (
        <div className={styles.cartListItem}>
            <img src={data.imgSrc} alt={data.brand} />
            <div className={styles.cartListItemInfoContainer}>
                <p>{data.title}</p>
                <p>{data.brand}</p>
                <p>{data.price}</p>
                <p>{data.capacity}</p>
            </div>
        </div>
    )
}

export default CartListItem
