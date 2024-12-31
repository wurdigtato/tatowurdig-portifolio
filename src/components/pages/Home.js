import { motion } from 'framer-motion'

import fotoPerfil from '../../img/perfil-grande.svg'
import styles from './Home.module.css'



function Home(){
    return (
    <section className={styles.home_container}>
        <div className={styles.home_content}>
            <h1>Olá, eu sou o</h1>
            <h2><span>Tácio Würdig</span> :)</h2>
            <p>Estudante de Análise e Desenvolvimento <br/> de Sistemas, em Pelotas/RS </p>
        </div>
        <img src={fotoPerfil} alt="" />
    </section>
    )
}

export default Home