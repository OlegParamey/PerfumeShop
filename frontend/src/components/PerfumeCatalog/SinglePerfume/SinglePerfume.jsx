import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { selectPerffumes } from '../../../redux/slices/perfumesSlice'
import { addPerfumeToCart } from '../../../redux/slices/cartSlice'
import ButtonAddToCart from '../../Button/ButtonAddToCart'
import styles from './SinglePerfume.module.css'
import FormOption from './FormOption/FormOption'
import FORMOPTIONLIST from '../../../data/FORMOPTIONLIST'

function SinglePerfume() {
    const { slug } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const perfume = useSelector(selectPerffumes).find((obj) => obj.id === slug)
    const [CapacityOptionList, setCapacityOptionList] = useState(FORMOPTIONLIST)

    useEffect(() => {
        if (!perfume) {
            navigate(-1)
        }
    }, [perfume, navigate])

    const handlerOptionSelect = (id) => {
        setCapacityOptionList(
            CapacityOptionList.map((obj) =>
                obj.id === id
                    ? { ...obj, isActive: true }
                    : { ...obj, isActive: false }
            )
        )
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        const selectedOption = CapacityOptionList.find((obj) => {
            if (obj.isActive === true) {
                return obj
            }
            return null
        })
        dispatch(addPerfumeToCart({ ...selectedOption, ...perfume }))
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
                                <ButtonAddToCart type="submit" />
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
