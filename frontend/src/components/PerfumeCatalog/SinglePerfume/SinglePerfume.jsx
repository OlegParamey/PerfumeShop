import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { selectPerfumes } from '../../../redux/slices/perfumesSlice'
import { addPerfumeToCart } from '../../../redux/slices/cartSlice'
import ButtonAddToCart from '../../Button/ButtonAddToCart'
import FormOption from './FormOption/FormOption'
import styles from './SinglePerfume.module.css'
import { CreatePerfumeCartItem } from '../../../utils/CreatePerfumeCartItem'

function SinglePerfume() {
    const { slug } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const perfume = useSelector(selectPerfumes).find((obj) => obj.id === slug)
    const [CapacityPriceOptionList, setCapacityPriceOptionList] = useState(
        perfume ? perfume.productInfo : []
    )

    useEffect(() => {
        if (!perfume) {
            navigate(-1)
        }
    }, [perfume, navigate])

    const handlerOptionSelect = ({ id, price }) => {
        setCapacityPriceOptionList(
            CapacityPriceOptionList.map((obj) =>
                obj.price === price && obj.id === id
                    ? { ...obj, isActive: true }
                    : { ...obj, isActive: false }
            )
        )
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        const activeOption = CapacityPriceOptionList.find((obj) => {
            if (obj.isActive === true) {
                return obj
            }
            return null
        })
        dispatch(addPerfumeToCart(CreatePerfumeCartItem(perfume, activeOption)))
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
                                    {CapacityPriceOptionList.map((obj) => (
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
                                    isDisabled={CapacityPriceOptionList.some(
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
