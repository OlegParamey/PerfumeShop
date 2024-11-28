import styles from './Payment.module.css'
import { useNavigate } from 'react-router-dom'

function EditButton() {
    const navigate = useNavigate()

    return (
        <div className={styles.edit} onClick={() => navigate('/cart')}>
            <span>Edit</span>
        </div>
    )
}

export default EditButton
