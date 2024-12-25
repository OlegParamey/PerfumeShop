import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { deleteItem, setItemQuantity } from '../../../../redux/slices/cartSlice'
import { IoTrashOutline } from 'react-icons/io5'
import CartSummary from '../../CartSummary'
import styles from './Payment.module.css'

function PaymentListItems({ cartList = [], finalPrice }) {
    const dispatch = useDispatch()
    const location = useLocation()
    const [localQuantities, setLocalQuantities] = useState(
        cartList.map((item) => item.quantity) // Сохраняем локальное состояние для каждого элемента
    )

    const handleSelectChange = (index, value) => {
        const updatedQuantities = [...localQuantities]
        updatedQuantities[index] = value // Обновляем количество для конкретного элемента
        setLocalQuantities(updatedQuantities)

        const item = cartList[index]
        dispatch(
            setItemQuantity({
                quantity: value,
                id: item.id,
                capacity: item.capacity,
            })
        )
    }

    const handleRemoveItem = (index) => {
        const item = cartList[index]
        dispatch(deleteItem({ id: item.id, capacity: item.capacity }))
    }

    useEffect(() => {
        // Синхронизируем локальные данные, если cartList изменится
        setLocalQuantities(cartList.map((item) => item.quantity))
    }, [cartList])

    console.log(cartList)

    return (
        <>
            {Array.isArray(cartList) && cartList.length > 0 ? (
                cartList.map((obj, index) => (
                    <div className={styles.item} key={obj.id || index}>
                        <div className={styles.imgContainer}>
                            <div className={styles.imgContainer}>
                                <Link to={`../perfumes/${obj.id}`}>
                                    <img src={obj.imgSrc} alt={obj.brand} />
                                </Link>
                            </div>
                            {location.pathname === '/cart' && (
                                <div
                                    className={styles.deleteItemButton}
                                    onClick={() => handleRemoveItem(index)}
                                >
                                    <IoTrashOutline />
                                </div>
                            )}
                        </div>

                        <div className={styles.itemInfo}>
                            <h3>{obj.title}</h3>
                            <h3
                                style={{
                                    fontStyle: 'italic',
                                    fontWeight: '300',
                                }}
                            >
                                {obj.brand}
                            </h3>

                            <div className={styles.groupInfo}>
                                <p>Capacity:</p>
                                <p>{obj.capacity} ml</p>
                            </div>
                            <div
                                style={{
                                    position: 'relative',
                                    height: '60px',
                                }}
                            >
                                <div className={styles.groupInfo}>
                                    <div className={styles.quantityContainer}>
                                        <p>Price for : </p>
                                        {location.pathname === '/cart' ? (
                                            <div className={styles.itemCount}>
                                                <select
                                                    name="quantity"
                                                    className={
                                                        styles.selectQuantityMenu
                                                    }
                                                    value={
                                                        localQuantities[index]
                                                    }
                                                    onChange={(e) =>
                                                        handleSelectChange(
                                                            index,
                                                            parseInt(
                                                                e.target.value
                                                            )
                                                        )
                                                    }
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
                                                    <option value="10">
                                                        10
                                                    </option>
                                                </select>
                                            </div>
                                        ) : (
                                            <b>{localQuantities[index]}</b>
                                        )}
                                    </div>
                                    <p>{Number(obj.subtotal).toFixed(2)} zł</p>
                                </div>
                                <p className={styles.priceText}>
                                    Price per one {obj.price} zł
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>Your cart is empty!</p>
            )}
            <CartSummary finalPrice={finalPrice} />
        </>
    )
}

export default PaymentListItems
