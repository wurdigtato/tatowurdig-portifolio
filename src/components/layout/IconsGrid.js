import React from "react";
import styles from "./IconsGrid.module.css"
import html5Icon from "../../img/html.png"
import cssIcon from "../../img/css.png"
import jsIcon from "../../img/js.png"
import javaIcon from "../../img/java.png"
import figmaIcon from "../../img/figma.png"
import tailwindIcon from "../../img/tailwind.png"
import nodeJsIcon from "../../img/nodejs.png"
import springIcon from "../../img/spring.png"
import photoshopIcon from "../../img/photoshop.png"
import mySQLIcon from "../../img/mySQL.png"
import reactIcon from "../../img/react.png"
import gitIcon from "../../img/git.png"

const icons = [
    {name: 'html5', src: html5Icon},
    {name: 'css3', src: cssIcon},
    {name: 'javaScript', src: jsIcon},
    {name: 'java', src: javaIcon},
    {name: 'Figma', src: figmaIcon},
    {name: 'tailwind', src: tailwindIcon},
    {name: 'nodeJs', src: nodeJsIcon},
    {name: 'spring', src: springIcon},
    {name: 'mysql', src: mySQLIcon},
    {name: 'photoshop', src: photoshopIcon},
    {name: 'react', src: reactIcon},
    {name: 'git', src: gitIcon},
]

function IconsGrid() {
    return (
        <div className={styles.icons_container}>
            {icons.map((icon, index) => (
                <div className={styles.icon} key={index}>
                    <img src={icon.src} alt={icon.name} />
                </div>
            ))}
        </div>
    )
}

export default IconsGrid