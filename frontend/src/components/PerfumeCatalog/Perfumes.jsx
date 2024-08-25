import { v4 as uuidv4 } from 'uuid'
import styles from './Perfumes.module.css'
import NUMBERS from '../../data/ArrayWithNumbers'
import Filter from '../Filter/Filter'

function Perfumes({ perfumesData }) {
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
                    {NUMBERS.map((num) => (
                        <div className={styles.perfumesBlock} key={uuidv4()}>
                            {num}
                        </div>
                    ))}
                </div>

                {/* <button
                    onClick={() => {
                        console.log(perfumesData)
                    }}
                ></button> */}
            </main>
        </div>
    )
}

export default Perfumes
