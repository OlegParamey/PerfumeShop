import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { selectPerffumes } from '../../../redux/slices/perfumesSlice'
import { addPerfumeToCart } from '../../../redux/slices/cartSlice'
import { v4 as uuidv4 } from 'uuid'
import ButtonAddToCart from '../../Button/ButtonAddToCart'
import styles from './SinglePerfume.module.css'
import FormOption from './FormOption/FormOption'

function SinglePerfume() {
    const { slug } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const perfume = useSelector(selectPerffumes).find((obj) => obj.id === slug)
    const [CapacityOptionList, setCapacityOptionList] = useState(
        perfume ? perfume.productInfo : []
    )

    useEffect(() => {
        if (!perfume) {
            navigate(-1)
        }
    }, [perfume, navigate])

    const handlerOptionSelect = ({ id, price }) => {
        setCapacityOptionList(
            CapacityOptionList.map((obj) =>
                obj.price === price && obj.id === id
                    ? { ...obj, isActive: true }
                    : { ...obj, isActive: false }
            )
        )
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        const { imgSrc, title, brand, id } = perfume
        const { capacity, price } = CapacityOptionList.find((obj) => {
            if (obj.isActive === true) {
                return obj
            }
            return null
        })
        dispatch(
            addPerfumeToCart({
                capacity,
                price,
                imgSrc,
                title,
                brand,
                id,
                productId: uuidv4(),
            })
        )
    }

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
                            <form onSubmit={handleSubmitForm}>
                                <div className={styles.form_checkbox}>
                                    {CapacityOptionList.map((obj) => (
                                        <FormOption
                                            className={
                                                obj.isActive
                                                    ? `${styles.option} ${styles.selectedOption}`
                                                    : styles.option
                                            }
                                            data={obj}
                                            onClickHandler={handlerOptionSelect}
                                            key={obj.capacity}
                                        />
                                    ))}
                                </div>
                                <ButtonAddToCart
                                    type="submit"
                                    isDisabled={CapacityOptionList.some(
                                        (obj) => obj.isActive
                                    )}
                                />
                            </form>
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
