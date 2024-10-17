import { useSelector } from 'react-redux'
import { selectPerfumes } from '../../redux/slices/perfumesSlice'
import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import CreateFilterList from '../../utils/CreateFilterList'
import Filter from '../Filter/Filter'
import PerfumeCard from './PerfumeCard'
import styles from './Perfumes.module.css'

function Perfumes() {
    const [searchParams, setSearchParams] = useSearchParams()
    const perfumesData = useSelector(selectPerfumes)
    const filterList = useMemo(
        () => CreateFilterList(perfumesData),
        [perfumesData]
    )

    const queryStringObj = useMemo(() => {
        return {
            queryTitle: searchParams.get('title')?.split(',') || [],
            queryBrand: searchParams.get('brand')?.split(',') || [],
            queryCapacity: searchParams.get('capacity')?.split(',') || [],
        }
    }, [searchParams])

    const filteredPerfumes = useMemo(() => {
        return perfumesData.filter((perfume) => {
            const matchesTitle =
                queryStringObj.queryTitle.length === 0 ||
                queryStringObj.queryTitle.some((title) =>
                    perfume.title.toLowerCase().includes(title.toLowerCase())
                )
            const matchesBrand =
                queryStringObj.queryBrand.length === 0 ||
                queryStringObj.queryBrand.some((brand) =>
                    perfume.brand.toLowerCase().includes(brand.toLowerCase())
                )
            const matchesCapacity =
                queryStringObj.queryCapacity.length === 0 ||
                perfume.productInfo.some((obj) =>
                    queryStringObj.queryCapacity.includes(obj.capacity)
                )
            return matchesTitle && matchesBrand && matchesCapacity
        })
    }, [perfumesData, queryStringObj])

    // Проверка на наличие совпадений по фильтрам
    const noBrandOrTitleOrCapacityMatches =
        filteredPerfumes.length === 0 &&
        (queryStringObj.queryBrand.length > 0 ||
            queryStringObj.queryTitle.length > 0 ||
            queryStringObj.queryCapacity.length > 0)

    // Данные для отображения (в случае отсутствия фильтров показываем все духи)
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
                            />
                        ))
                    )}
                </div>
            </main>
        </div>
    )
}

export default Perfumes
