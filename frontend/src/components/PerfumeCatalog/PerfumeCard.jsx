function PerfumeCard({ perfume, className }) {
    return (
        <div className={className}>
            <img src={perfume.imgSrc} alt={perfume.brand}></img>
            <p>{perfume.title}</p>
            <p>
                <strong>{perfume.brand}</strong>
            </p>
        </div>
    )
}

export default PerfumeCard
