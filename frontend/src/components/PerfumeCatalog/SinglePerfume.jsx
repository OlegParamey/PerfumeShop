import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { selectPerffumes } from '../../redux/slices/perfumesSlice'
import styles from './Perfumes.module.css'

function SinglePerfume() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const perfume = useSelector(selectPerffumes).find((obj) => obj.id === slug)

    useEffect(() => {
        if (!perfume) {
            navigate('..', { relative: 'path' })
        }
    }, [perfume, navigate])

    return (
        <div className={styles.singlePerfume}>
            <img src={perfume.imgSrc} alt={perfume.brand}></img>
            <p style={{ color: '#000' }}>{perfume.title}</p>
            <p>
                <strong>{perfume.brand}</strong>
            </p>
        </div>
    )
}

export default SinglePerfume
