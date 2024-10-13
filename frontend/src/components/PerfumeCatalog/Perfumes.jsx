import { useDispatch, useSelector } from 'react-redux'
import { selectPerfumes } from '../../redux/slices/perfumesSlice'
import { selectFilterList, setPrice } from '../../redux/slices/filterSlice'
import { useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import CreateFilterList from '../../utils/CreateFilterList'
import Filter from '../Filter/Filter'
import PerfumeCard from './PerfumeCard'
import styles from './Perfumes.module.css'

function Perfumes() {
    const [searchParams, setSearchParams] = useSearchParams()
    const perfumesData = useSelector(selectPerfumes)
    const filterData = useSelector(selectFilterList)
    const filterList = useMemo(
        () => CreateFilterList(perfumesData),
        [perfumesData]
    )
    const dispatch = useDispatch()

    useEffect(() => {
        const queryTitle =
            searchParams.has('title') && searchParams.get('title').split(',')
        console.log(queryTitle)
        const queryBrand =
            searchParams.has('brand') && searchParams.get('brand').split(',')
        console.log(queryBrand)
        const queryCapacity =
            searchParams.has('capacity') &&
            searchParams.get('capacity').split(',')
        console.log(queryCapacity)
    }, [searchParams])

    useEffect(() => {
        if (perfumesData.length > 0) {
            dispatch(setPrice(filterList))
        }
    }, [perfumesData, filterList, dispatch])

    // Логика фильтрации по всем критериям
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

    // Проверяем, есть ли товары по фильтрам бренда и названия
    const noBrandOrTitleOrCapacityMatches =
        filteredPerfumes.length === 0 &&
        (filterData.brand.length > 0 ||
            filterData.title.length > 0 ||
            filterData.capacity.length > 0)

    const dataForDisplay =
        filteredPerfumes.length > 0 ? filteredPerfumes : perfumesData

    return (
        <div className={styles.perfumes}>
            <header className={styles.perfumesHeader}>
                <h1>Perfumes Catalog</h1>
            </header>
            <main className={styles.perfumesMain}>
                <div className={styles.perfumesLeftRow}>
                    <Filter
                        filterList={filterList}
                        searchParams={searchParams}
                        setSearchParams={setSearchParams}
                    />
                </div>

                <div className={styles.perfumesRightRow}>
                    {noBrandOrTitleOrCapacityMatches ? (
                        <h1 className={styles.noMatchesMessage}>
                            No such a product...
                        </h1>
                    ) : (
                        dataForDisplay.map((perfume) => (
                            <PerfumeCard
                                perfume={perfume}
                                className={styles.perfumesBlock}
                                key={perfume.id}
                            ></PerfumeCard>
                        ))
                    )}
                </div>
            </main>
        </div>
    )
}

export default Perfumes
