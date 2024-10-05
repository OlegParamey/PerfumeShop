function FormOption({ className, data, onClickHandler }) {
    return (
        <div className={className} onClick={() => onClickHandler(data)}>
            <p>{data.capacity} ml</p>
            <p>
                {`${data.price} `}
                <strong>zł</strong>
            </p>
        </div>
    )
}

export default FormOption
