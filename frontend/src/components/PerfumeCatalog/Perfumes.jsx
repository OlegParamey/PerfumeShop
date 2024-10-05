import { useDispatch, useSelector } from 'react-redux'
import { selectPerfumes } from '../../redux/slices/perfumesSlice'
import { selectFilterList, setPrice } from '../../redux/slices/filterSlice'
import { useEffect, useMemo, useRef } from 'react'
import CreateFilterList from '../../utils/CreateFilterList'
import Filter from '../Filter/Filter'
import PerfumeCard from './PerfumeCard'
import styles from './Perfumes.module.css'

function Perfumes() {
    const perfumesData = useSelector(selectPerfumes)
    const filterData = useSelector(selectFilterList)
    const filterList = useMemo(
        () => CreateFilterList(perfumesData),
        [perfumesData]
    )
    const dispatch = useDispatch()

    // Ref для контроля, чтобы setPrice срабатывал один раз
    const hasDispatchedPrice = useRef(false)

    useEffect(() => {
        if (perfumesData.length > 0 && !hasDispatchedPrice.current) {
            dispatch(setPrice(filterList))
            hasDispatchedPrice.current = true
        }
    })

    // Логика фильтрации парфюмов
    const filteredPerfumes = useMemo(() => {
        return perfumesData.filter((perfume) => {
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

            const matchesCapacity =
                filterData.capacity.length === 0 ||
                perfume.productInfo.some((obj) =>
                    filterData.capacity.some((capacity) =>
                        obj.capacity.includes(capacity)
                    )
                )

            return matchesTitle && matchesBrand && matchesCapacity
        })
    }, [perfumesData, filterData])

    const dataForDisplay =
        filteredPerfumes.length > 0 ? filteredPerfumes : perfumesData

    return (
        <div className={styles.perfumes}>
            <header className={styles.perfumesHeader}>
                <h1>Perfumes Catalog</h1>
            </header>
            <main className={styles.perfumesMain}>
                <div className={styles.perfumesLeftRow}>
                    <Filter filterList={filterList} />
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
