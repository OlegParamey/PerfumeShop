import styles from './Perfumes.module.css'
import NUMBERS from '../../data/ArrayWithNumbers'
import { v4 as uuidv4 } from 'uuid'

function Perfumes() {
    return (
        <div className={styles.perfumes}>
            <header className={styles.perfumesHeader}>
                <h1>Perfumes Catalog</h1>
            </header>
            <main className={styles.perfumesMain}>
                <div className={styles.perfumesLeftRow}>
                    <div
                        style={{
                            height: '100%',
                            width: '200px',
                            backgroundColor: 'gray',
                        }}
                    >
                        Left
                    </div>
                </div>

                <div className={styles.perfumesRightRow}>
                    {NUMBERS.map((num) => (
                        <div className={styles.perfumesBlock} key={uuidv4()}>
                            {num}
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default Perfumes
