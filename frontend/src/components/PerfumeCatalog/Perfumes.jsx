import { v4 as uuidv4 } from 'uuid'
import { useEffect } from 'react'
import axios from 'axios'
import {
    selectPerffumes,
    getPerfumeList,
} from '../../redux/slices/perfumesSlice'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Perfumes.module.css'
import Filter from '../Filter/Filter'
import PerfumeCard from './PerfumeCard'

function Perfumes() {
    const perfumesData = useSelector(selectPerffumes)
    const dispatch = useDispatch()

    //Here should be a fetch API
    useEffect(() => {
        async function fetchPerfumesData() {
            try {
                const res = await axios.get('http://localhost:4000/perfumes')
                dispatch(getPerfumeList(res.data))
            } catch (error) {
                console.error('Failed to fetch perfumes data:', error)
            }
        }
        fetchPerfumesData()
    }, [dispatch])

    return (
        <div className={styles.perfumes}>
            <header className={styles.perfumesHeader}>
                <h1>Perfumes Catalog</h1>
            </header>
            <main className={styles.perfumesMain}>
                <div className={styles.perfumesLeftRow}>
                    <Filter />
                </div>

                <div className={styles.perfumesRightRow}>
                    {perfumesData &&
                        perfumesData.map((perfume) => (
                            <PerfumeCard
                                perfume={perfume}
                                className={styles.perfumesBlock}
                                key={uuidv4()}
                            ></PerfumeCard>
                        ))}
                </div>

                <button
                    onClick={() => {
                        console.log(perfumesData) // Теперь perfumesData всегда актуально
                    }}
                >
                    Log Perfumes Data
                </button>
            </main>
        </div>
    )
}

export default Perfumes
