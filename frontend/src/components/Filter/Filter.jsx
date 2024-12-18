import { RxReset } from 'react-icons/rx'
import { useEffect, useState } from 'react'
import styles from './Filter.module.css'

function Filter({ filterList, searchParams, setSearchParams }) {
    // Состояние для хранения выбранных значений фильтров
    const [selectedBrands, setSelectedBrands] = useState([])
    const [selectedTitles, setSelectedTitles] = useState([])
    const [selectedCapacities, setSelectedCapacities] = useState([])
    const [sortOrder, setSortOrder] = useState('')

    // Инициализация фильтров на основе параметров URL
    useEffect(() => {
        const brandParams = searchParams.get('brand')?.split(',') || []
        const titleParams = searchParams.get('title')?.split(',') || []
        const capacityParams = searchParams.get('capacity')?.split(',') || []
        const sortParam = searchParams.get('sort') || ''

        setSelectedBrands(brandParams)
        setSelectedTitles(titleParams)
        setSelectedCapacities(capacityParams)
        setSortOrder(sortParam)
    }, [searchParams])

    // Обработчик отправки формы
    const handleSubmitForm = (e) => {
        e.preventDefault()

        // Обновляем параметры URL на основе выбранных значений
        const params = {}
        if (selectedBrands.length) params.brand = selectedBrands.join(',')
        if (selectedTitles.length) params.title = selectedTitles.join(',')
        if (selectedCapacities.length)
            params.capacity = selectedCapacities.join(',')
        if (sortOrder) params.sort = sortOrder
        setSearchParams(params)
    }

    // Функция для обработки выбора и снятия выбора опций
    const handleOptionToggle = (selectedItems, setSelectedItems, value) => {
        if (selectedItems.includes(value)) {
            // Если значение уже выбрано, удаляем его из списка
            setSelectedItems(selectedItems.filter((item) => item !== value))
        } else {
            // Иначе добавляем новое значение в список
            setSelectedItems([...selectedItems, value])
        }
    }

    // Обработчик для сброса фильтров
    const handleResetFilter = () => {
        setSelectedBrands([])
        setSelectedTitles([])
        setSelectedCapacities([])
        setSortOrder('')
        setSearchParams({}) // Очищаем все параметры URL
    }

    return (
        <div className={styles.filterContainer}>
            <form autoComplete="off" onSubmit={handleSubmitForm}>
                <nav className={styles.filterPanel}>
                    <header>
                        <div className={styles.filterPanelHeader}>
                            <span>Filter and Sort</span>
                            <div
                                className={styles.resetIcon}
                                onClick={handleResetFilter} // Reset
                            >
                                <RxReset />
                                <p>reset</p>
                            </div>
                        </div>
                    </header>

                    <section className={styles.filterPanelBody}>
                        <details>
                            <summary>Sort by</summary>
                            <ul>
                                <li
                                    onClick={() => setSortOrder('lowToHigh')}
                                    className={
                                        sortOrder === 'lowToHigh'
                                            ? styles.active
                                            : ''
                                    }
                                >
                                    PRICE (LOW TO HIGH)
                                </li>
                                <li
                                    onClick={() => setSortOrder('highToLow')}
                                    className={
                                        sortOrder === 'highToLow'
                                            ? styles.active
                                            : ''
                                    }
                                >
                                    PRICE (HIGH TO LOW)
                                </li>
                            </ul>
                        </details>

                        <details>
                            <summary>Brand</summary>
                            <ul>
                                {filterList.brand.map((element) => (
                                    <li
                                        key={element}
                                        onClick={() =>
                                            handleOptionToggle(
                                                selectedBrands,
                                                setSelectedBrands,
                                                element
                                            )
                                        }
                                        className={
                                            selectedBrands.includes(element)
                                                ? styles.active
                                                : ''
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
                                        key={element}
                                        onClick={() =>
                                            handleOptionToggle(
                                                selectedTitles,
                                                setSelectedTitles,
                                                element
                                            )
                                        }
                                        className={
                                            selectedTitles.includes(element)
                                                ? styles.active
                                                : ''
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
                                        key={element}
                                        onClick={() =>
                                            handleOptionToggle(
                                                selectedCapacities,
                                                setSelectedCapacities,
                                                element
                                            )
                                        }
                                        className={
                                            selectedCapacities.includes(element)
                                                ? styles.active
                                                : ''
                                        }
                                        title={element}
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
                    <div className={styles.filterFooter}>
                        <button type="submit">Filter</button>
                    </div>
                </nav>
            </form>
        </div>
    )
}

export default Filter
