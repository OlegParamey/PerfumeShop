import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setItemQuantity } from '../../redux/slices/cartSlice'
import styles from './Cart.module.css'

function CartListsItem({ data }) {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)

    const handleSelectChange = (e) => {
        setQuantity(e.target.value) // Update the state with the selected value
        dispatch(setItemQuantity(quantity))
    }

    return (
        <div className={styles.listItem}>
            <div className={styles.itemCount}>
                <select
                    name="quantity"
                    className={styles.selectQuantityMenu}
                    value={quantity}
                    onChange={handleSelectChange}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="7">6</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div className={styles.imgContainer}>
                <img src={data.imgSrc} alt={data.brand} />
            </div>
            <div className={styles.listItemInfoContainer}>
                <div className={styles.itemTitle}>
                    <p>{data.title}</p>
                </div>
                <div className={styles.itemCapacityPrice}>
                    <p>{data.capacity} ml</p>
                    <strong>{data.price * data.quantity} zł</strong>
                </div>
            </div>
        </div>
    )
}

export default CartListsItem
