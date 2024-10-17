import { useDispatch } from 'react-redux'
import { useCallback, useEffect, useState } from 'react'
import { setItemQuantity, deleteItem } from '../../redux/slices/cartSlice'
import { IoTrashOutline } from 'react-icons/io5'
import styles from './Cart.module.css'
import { Link } from 'react-router-dom'

function CartListsItem({ data }) {
    const dispatch = useDispatch()
    const [localQuantity, setLocalQuantity] = useState(data.quantity)

    const dispatchQuantity = useCallback(
        (currentQuantity) => {
            dispatch(
                setItemQuantity({
                    quantity: currentQuantity,
                    id: data.id,
                    capacity: data.capacity,
                })
            )
        },
        [data.capacity, data.id, dispatch]
    )

    useEffect(() => {
        dispatchQuantity(localQuantity)
        //
    }, [dispatchQuantity, localQuantity])

    const handleSelectChange = (e) => {
        dispatchQuantity(e.target.value)
        setLocalQuantity(e.target.value)
    }

    const handleRemoveItemByIdAndCapacity = (data) => {
        dispatch(deleteItem(data))
    }

    return (
        <div className={styles.listItem}>
            <div className={styles.itemCount}>
                <select
                    name="quantity"
                    className={styles.selectQuantityMenu}
                    value={localQuantity}
                    onChange={handleSelectChange}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <Link to={`../perfumes/${data.id}`}>
                <div className={styles.imgContainer}>
                    <img src={data.imgSrc} alt={data.brand} />
                </div>
            </Link>
            <div className={styles.listItemInfoContainer}>
                <div className={styles.itemTitle}>
                    <p>{data.title}</p>
                </div>
                <div className={styles.itemCapacityPrice}>
                    <strong>{data.capacity} ml</strong>
                    <strong>{data.subtotal}.00 zł</strong>
                    <p className={styles.priceForOne}>
                        Pirce for one: {data.price}zł
                    </p>
                </div>
            </div>
            <div
                className={styles.deleteItemButton}
                onClick={() =>
                    handleRemoveItemByIdAndCapacity({
                        id: data.id,
                        capacity: data.capacity,
                    })
                }
            >
                <IoTrashOutline />
            </div>
        </div>
    )
}

export default CartListsItem
