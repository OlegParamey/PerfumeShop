import styles from './Cart.module.css'
import { useNavigate } from 'react-router-dom'

function CartDropDownItemsList({ itemData }) {
    const navigate = useNavigate()
    return (
        <div
            className={styles.cartDropDownItem}
            onClick={() => navigate(`perfumes/${itemData.id}`)}
        >
            <img src={itemData.imgSrc} alt={itemData.brand} />
            <div className={styles.optionData}>
                <p>{itemData.brand}</p>
                <p>
                    {itemData.price} <strong>zł</strong>
                </p>
                <p>
                    {itemData.capacity} <strong>ml</strong>
                </p>
            </div>
        </div>
    )
}

export default CartDropDownItemsList
