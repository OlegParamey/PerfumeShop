function ProductIdentification(obj, action) {
    return (
        obj.id === action.payload.id && obj.capacity === action.payload.capacity
    )
}

export default ProductIdentification
