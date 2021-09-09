import React from 'react'
import styles from './Billboard.module.css'
import HeroImage from './Assets/billboard.webp'
import HeroImageTitle from './Assets/billboard-title.webp'

function Billboard() {
    return (
        <div className={styles.billboard}>
            <div className={styles.innerbillboard}>
            <img src={HeroImage} alt="Abstract: The art of design"/>
            <div className={styles.info}>
            <img src={HeroImageTitle} alt="" srcset="" /> 
            </div>
            </div>
        </div>
    )
}

export default Billboard;
