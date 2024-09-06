import { selectPerffumes } from '../../redux/slices/perfumesSlice'
import { useSelector } from 'react-redux'
import styles from './Perfumes.module.css'
import Filter from '../Filter/Filter'
import PerfumeCard from './PerfumeCard'

function Perfumes() {
    const perfumesData = useSelector(selectPerffumes)

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
                                key={perfume.id}
                            ></PerfumeCard>
                        ))}
                </div>
            </main>
        </div>
    )
}

export default Perfumes
