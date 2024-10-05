import { useDispatch, useSelector } from 'react-redux'
import {
    setBrand,
    setTitle,
    setSortBy,
    setCapacity,
    resetFilter,
    selectFilterBrand,
    selectFilterTitle,
    selectFilterCapacity,
} from '../../redux/slices/filterSlice'
import { RxReset } from 'react-icons/rx'
import styles from './Filter.module.css'

function Filter({ filterList }) {
    const selectedBrands = useSelector(selectFilterBrand)
    const selectedTitles = useSelector(selectFilterTitle)
    const selectedCapacities = useSelector(selectFilterCapacity)
    const dispatch = useDispatch()

    const handleSetFilterBrand = (element) => {
        dispatch(setBrand(element))
    }
    const handleSetFilterTitle = (element) => {
        dispatch(setTitle(element))
    }

    const handleSetFilterCapacity = (element) => {
        dispatch(setCapacity(element))
    }

    const handleSetFilterSortBy = (element) => {
        // dispatch(setSortBy(element))
    }
    const handleResetFilter = () => {
        dispatch(resetFilter())
    }

    return (
        <div className={styles.filterContainer}>
            <nav className={styles.filterPanel}>
                <header>
                    <div className={styles.filterPanelHeader}>
                        <span>Filter and Sort</span>
                        <div
                            className={styles.resetIcon}
                            onClick={() => handleResetFilter()}
                        >
                            <RxReset></RxReset>
                            <p>reset</p>
                        </div>
                    </div>
                </header>
                <section className={styles.filterPanelBody}>
                    <details>
                        <summary>Sort by</summary>
                        <ul>
                            <li onClick={() => handleSetFilterSortBy('')}>
                                PRICE (LOW TO HIGH)
                            </li>
                            <li onClick={() => handleSetFilterSortBy('')}>
                                PRICE (HIGH TO LOW)
                            </li>
                        </ul>
                    </details>

                    <details>
                        <summary>Brand</summary>
                        <ul>
                            {filterList.brand.map((element) => (
                                <li
                                    className={
                                        selectedBrands.includes(element)
                                            ? styles.active
                                            : ''
                                    }
                                    key={element}
                                    onClick={() =>
                                        handleSetFilterBrand(element)
                                    }
                                    title={element}
                                >
                                    {element}
                                </li>
                            ))}
                        </ul>
                    </details>

                    <details>
                        <summary>Title</summary>
                        <ul>
                            {filterList.title.map((element) => (
                                <li
                                    className={
                                        selectedTitles.includes(element)
                                            ? styles.active
                                            : ''
                                    }
                                    key={element}
                                    onClick={() =>
                                        handleSetFilterTitle(element)
                                    }
                                    title={element}
                                >
                                    {element}
                                </li>
                            ))}
                        </ul>
                    </details>

                    <details>
                        <summary>Capacity</summary>
                        <ul>
                            {filterList.capacity.map((element) => (
                                <li
                                    className={
                                        selectedCapacities.includes(element)
                                            ? styles.active
                                            : ''
                                    }
                                    key={element}
                                    onClick={() =>
                                        handleSetFilterCapacity(element)
                                    }
                                >
                                    {element}
                                </li>
                            ))}
                        </ul>
                    </details>

                    <details>
                        <summary>Price range</summary>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                    </details>
                </section>
                {/* <footer className={styles.filterPanelFooter}>
                    <button>Filter</button>
                </footer> */}
            </nav>
        </div>
    )
}

export default Filter
