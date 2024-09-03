function FormOption({ capacity, price, styles, onClick }) {
    return (
        <div className={styles.option} onClick={() => onClick(`${capacity}`)}>
            <p>{capacity}</p>
            <p>{price}</p>
        </div>
    )
}

export default FormOption