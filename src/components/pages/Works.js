import styles from './Works.module.css'
import TopPage from '../layout/TopPage'
import WorkCard from '../layout/WorkCard'

import logoIris from '../../img/irislogo.png'
import logoMessias from '../../img/messiaslogo.png'
import logoConecte from '../../img/Conecte.png'


import { FaFigma } from 'react-icons/fa'
import { FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { RiTailwindCssFill } from 'react-icons/ri'
import { IoLogoJavascript } from "react-icons/io5"

function Works(){
    return (
        <section className={styles.works_container}>
            <TopPage />
            <h3><i class="fa-solid fa-code-fork"></i>Trabalhos</h3>
            <div className={styles.works_cards}>
                <a href='http://gooogle.com'>
                    <WorkCard 
                        image={logoIris} 
                        icons={[<FaFigma className={styles.icon}/>]}
                    />
                </a>

                <WorkCard 
                    image={logoMessias} 
                    icons={[
                        <FaFigma />,
                        <FaHtml5 />,
                        <FaCss3Alt />,
                        <RiTailwindCssFill />,
                        <IoLogoJavascript />
                    ]}
                />
                <WorkCard 
                    image={logoConecte}
                    icons={[
                        <FaFigma />,
                        <FaHtml5 />,
                        <RiTailwindCssFill />,
                    ]}
                />
            </div>
        </section>
    )
}

export default Works