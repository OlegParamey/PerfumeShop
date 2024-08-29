import { useNavigate } from 'react-router-dom'

function PerfumeCard({ perfume, className }) {
    const navigate = useNavigate()

    return (
        <div className={className} onClick={() => navigate(`./${perfume.id}`)}>
            <img src={perfume.imgSrc} alt={perfume.brand}></img>
            <p>{perfume.title}</p>
            <p>
                <strong>{perfume.brand}</strong>
            </p>
        </div>
    )
}

export default PerfumeCard
