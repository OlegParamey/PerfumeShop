import { useSelector } from 'react-redux'
import { selectPerffumes } from '../../redux/slices/perfumesSlice'
import { selectFilterList } from '../../redux/slices/filterSlice'
import styles from './Perfumes.module.css'
import Filter from '../Filter/Filter'
import PerfumeCard from './PerfumeCard'

function Perfumes() {
    const perfumesData = useSelector(selectPerffumes)
    const filterData = useSelector(selectFilterList)

    const filteredPerfumes = perfumesData.filter((perfume) => {
        const matchesTitle =
            filterData.title.length === 0 ||
            filterData.title.some((title) =>
                perfume.title.toLowerCase().includes(title.toLowerCase())
            )

        const matchesBrand =
            filterData.brand.length === 0 ||
            filterData.brand.some((brand) =>
                perfume.brand.toLowerCase().includes(brand.toLowerCase())
            )

        return matchesTitle && matchesBrand
    })

    const dataForDisplay =
        filteredPerfumes.length < 0 ? perfumesData : filteredPerfumes

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
                    {dataForDisplay &&
                        dataForDisplay.map((perfume) => (
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
