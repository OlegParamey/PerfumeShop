import { useSelector } from 'react-redux'
import { selectCartList } from '../../redux/slices/cartSlice'

function Cart() {
    const cartList = useSelector(selectCartList)
    return (
        cartList &&
        cartList.map((perfume) => (
            <img
                src={perfume.imgSrc}
                alt={perfume.brand}
                key={`${perfume.id}${perfume.capacity}`}
            />
        ))
    )
}

export default Cart
