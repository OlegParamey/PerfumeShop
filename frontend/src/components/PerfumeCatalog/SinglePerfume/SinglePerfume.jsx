import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { selectPerffumes } from '../../../redux/slices/perfumesSlice'
import ButtonAddToCart from '../../Button/ButtonAddToCart'
import styles from './SinglePerfume.module.css'

function SinglePerfume() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const perfume = useSelector(selectPerffumes).find((obj) => obj.id === slug)

    useEffect(() => {
        if (!perfume) {
            navigate(-1)
        }
    }, [perfume, navigate])

    return (
        <div className={styles.main}>
            <div className={styles.content}>
                {perfume ? (
                    <div className={styles.singlePerfume}>
                        <img src={perfume.imgSrc} alt={perfume.brand}></img>
                        <div className={styles.container}>
                            <p>{perfume.title}</p>
                            <p>
                                <strong>{perfume.brand}</strong>
                            </p>
                            <ButtonAddToCart />
                        </div>
                    </div>
                ) : (
                    <p>loading</p>
                )}
            </div>
        </div>
    )
}

export default SinglePerfume
