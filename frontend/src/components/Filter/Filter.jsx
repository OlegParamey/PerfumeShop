import { useSelector, useDispatch } from 'react-redux'
import { selectPerffumes } from '../../redux/slices/perfumesSlice'
import {
    setBrand,
    setTitle,
    setSortBy,
    setPrice,
    setCapacity,
    resetFilter,
} from '../../redux/slices/filterSlice'
import { RxReset } from 'react-icons/rx'
import CreateFilterList from '../../utils/CreateFilterList'
import styles from './Filter.module.css'
import { useEffect } from 'react'

function Filter() {
    const filterList = CreateFilterList(useSelector(selectPerffumes))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPrice(filterList))
    }, [dispatch, filterList])

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
        dispatch(setSortBy(element))
    }
    const handleResetFilter = () => {
        dispatch(resetFilter())
    }

    return (
        <div className={styles.filterContainer}>
            <nav className={styles.filterPanel}>
                <header>
                    <p className={styles.filterPanelHeader}>
                        <span>Filter and Sort</span>
                        <div
                            className={styles.resetIcon}
                            onClick={() => handleResetFilter()}
                        >
                            <RxReset></RxReset>
                            <p>reset</p>
                        </div>
                    </p>
                </header>
                <section className={styles.filterPanelBody}>
                    <details>
                        <summary>Sort by</summary>
                        <ul>
                            <li>PRICE: LOW TO HIGH</li>
                            <li>PRICE: HIGH TO LOW</li>
                        </ul>
                    </details>

                    <details>
                        <summary>Brand</summary>
                        <ul>
                            {filterList.brand.map((element) => (
                                <li
                                    key={element}
                                    onClick={() =>
                                        handleSetFilterBrand(element)
                                    }
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
                                    key={element}
                                    onClick={() =>
                                        handleSetFilterTitle(element)
                                    }
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
                <footer className={styles.filterPanelFooter}>
                    <button>Filter</button>
                </footer>
            </nav>
        </div>
    )
}

export default Filter
