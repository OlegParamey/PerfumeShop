import { useSelector } from 'react-redux'
import { selectPerffumes } from '../../redux/slices/perfumesSlice'
import CreateFilterList from '../../utils/CreateFilterList'
import styles from './Filter.module.css'

function Filter() {
    const filterList = CreateFilterList(useSelector(selectPerffumes))

    return (
        <div className={styles.filterContainer}>
            <nav className={styles.filterPanel}>
                <header>
                    <p className={styles.filterPanelHeader}>
                        <span>Filter and Sort</span>
                    </p>
                </header>
                <section className={styles.filterPanelBody}>
                    <details>
                        <summary>Brand</summary>
                        <ul>
                            {filterList.brand.map((element) => (
                                <li key={element}>{element}</li>
                            ))}
                        </ul>
                    </details>

                    <details>
                        <summary>Title</summary>
                        <ul>
                            {filterList.title.map((element) => (
                                <li key={element}>{element}</li>
                            ))}
                        </ul>
                    </details>

                    <details>
                        <summary>Price range</summary>
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
