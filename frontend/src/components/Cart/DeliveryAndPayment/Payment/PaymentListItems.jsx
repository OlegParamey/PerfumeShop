import CartSummary from '../../CartSummary'
import styles from './Payment.module.css'

function PaymentListItems({ itemsList, finalPrice }) {
    return (
        <>
            {itemsList &&
                itemsList.map((obj) => {
                    return (
                        <div className={styles.item} key={obj.productId}>
                            <div className={styles.imgContainer}>
                                <img src={obj.imgSrc} alt={obj.brand} />
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
                                    <p>Capasity:</p>
                                    <p>{obj.capacity} ml</p>
                                </div>
                                <div className={styles.groupInfo}>
                                    <p>
                                        Price for <b>{obj.quantity}</b>:
                                    </p>
                                    <p>{obj.subtotal} zł</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            <CartSummary finalPrice={finalPrice} />
        </>
    )
}

export default PaymentListItems
