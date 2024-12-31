import styles from './TopPage.module.css'
import fotoPerfil from '../../img/perfil-pequeno.svg'

function TopPage(){
    return (
        <div className={styles.header_content}>
        <h2>Tácio <span>Würdig</span></h2>
        <img src={fotoPerfil} alt="" />
  </div>
    )
}

export default TopPage