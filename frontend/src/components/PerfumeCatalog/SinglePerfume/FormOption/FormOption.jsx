function FormOption({ className, data, onClickHandler }) {
    return (
        <div className={className} onClick={() => onClickHandler(data.id)}>
            <p>{data.capacity}</p>
            <p>
                {`${data.price} `}
                <strong>USD</strong>
            </p>
        </div>
    )
}

export default FormOption
