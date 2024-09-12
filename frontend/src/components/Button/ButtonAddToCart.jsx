function ButtonAddToCart({ type, isDisabled }) {
    return (
        <button type={type} disabled={!isDisabled}>
            Add to cart
        </button>
    )
}

export default ButtonAddToCart
