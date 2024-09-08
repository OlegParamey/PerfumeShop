import styles from './Cart.module.css'

function CartListsItem({ data }) {
    return (
        <div className={styles.listItem}>
            <img src={data.imgSrc} alt={data.brand} />
            <div className={styles.listItemInfoContainer}>
                <p>{data.title}</p>
                <p>{data.brand}</p>
                <p>{data.capacity}</p>
                <strong>{data.price} zł</strong>
            </div>
        </div>
    )
}

export default CartListsItem
