
import styles from './WorkCard.module.css'

function WorkCard( {image, icons}) {
    return (
        <span className={styles.cardContainer}>
            <div className={styles.card}>
                <img src={image} alt="" />
            
            </div>
            <div className={styles.card_description}>
            {icons.map((icon, index) => (
                    <span key={index} className={styles.icon_wrapper}>
                        {icon}
                    </span>
                ))}
             </div>
        </span>
    )
}

export default WorkCard