function PerfumeCard({ perfume, className }) {
    return (
        <div className={className}>
            <img
                src={perfume.imgSrc}
                alt={perfume.brand}
                style={{ width: '200px', height: '200px' }}
            ></img>
            <p>{perfume.title}</p>
            <p style={{ color: 'rgb(213, 34, 249)' }}>
                <strong>{perfume.year}</strong>
            </p>
        </div>
    )
}

export default PerfumeCard
