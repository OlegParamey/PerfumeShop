import styles from './Cart.module.css'

function CartDropDownItemsList({ itemData }) {
    return (
        <div className={styles.cartDropDownItem}>
            <img src={itemData.imgSrc} alt={itemData.brand} />
            <div className={styles.optionData}>
                <p>{itemData.brand}</p>
                <p>
                    {itemData.price} <strong>USD</strong>
                </p>
                <p>{itemData.capacity}</p>
            </div>
        </div>
    )
}

export default CartDropDownItemsList
