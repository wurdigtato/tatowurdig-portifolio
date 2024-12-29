import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

import Container from "./Countainer"

function Navbar() {
    return(
        <nav>
            <Container>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Página Inicial</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/about">Sobre</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/works">Trabalhos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar