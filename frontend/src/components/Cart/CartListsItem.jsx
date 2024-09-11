import styles from './Cart.module.css'

function CartListsItem({ data }) {
    return (
        <div className={styles.listItem}>
            <div className={styles.itemCount}>1</div>
            <div className={styles.imgContainer}>
                <img src={data.imgSrc} alt={data.brand} />
            </div>
            <div className={styles.listItemInfoContainer}>
                <div className={styles.itemTitle}>
                    <p>{data.title}</p>
                </div>
                <div className={styles.itemCapacityPrice}>
                    <p>{data.capacity} ml</p>
                    <strong>{data.price} zł</strong>
                </div>
            </div>
        </div>
    )
}

export default CartListsItem
