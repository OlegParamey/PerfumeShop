import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { selectPerffumes } from '../../../redux/slices/perfumesSlice'
import ButtonAddToCart from '../../Button/ButtonAddToCart'
import styles from './SinglePerfume.module.css'
import FormOption from './FormOption/FormOption'

function SinglePerfume() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const perfume = useSelector(selectPerffumes).find((obj) => obj.id === slug)
    const [selectedCapacity, setSelectedCapacity] = useState(null)

    const handleCheckboxChange = (value) => {
        setSelectedCapacity(value)
    }
    useEffect(() => {
        if (!perfume) {
            navigate(-1)
        }
    }, [perfume, navigate])

    function handleSubmitForm(e) {
        e.preventDefault()
        console.log(selectedCapacity)
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
                                    <FormOption
                                        capacity={'30 ml'}
                                        price={299}
                                        styles={styles}
                                        onClick={handleCheckboxChange}
                                    />
                                    <FormOption
                                        capacity={'50 ml'}
                                        price={499}
                                        styles={styles}
                                        onClick={handleCheckboxChange}
                                    />
                                    <FormOption
                                        capacity={'100 ml'}
                                        price={799}
                                        styles={styles}
                                        onClick={handleCheckboxChange}
                                    />
                                    <ButtonAddToCart type="submit" />
                                </div>
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
