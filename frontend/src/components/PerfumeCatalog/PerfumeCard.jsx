import { useNavigate } from 'react-router-dom'
import ButtonAddToCart from '../Button/ButtonAddToCart'

function PerfumeCard({ perfume, className }) {
    const navigate = useNavigate()

    return (
        <div className={className}>
            <div onClick={() => navigate(`./${perfume.id}`)}>
                <img src={perfume.imgSrc} alt={perfume.brand}></img>
                <p>{perfume.title}</p>
                <p>
                    <strong>{perfume.brand}</strong>
                </p>
            </div>
            <ButtonAddToCart />
        </div>
    )
}

export default PerfumeCard
