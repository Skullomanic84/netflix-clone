import React from 'react'
import styles from './SocialLinks.module.css'
import InstagramIcon from './Assets/InstagramIcon'
import TwitterIcon from './Assets/TwitterIcon'
import YoutubeIcon from './Assets/YoutubeIcon'
import FacebookIcon from './Assets/FacebookIcon'


function SocialLinks() {
    return (
        <div className={styles.socialcontainer}>
            <div className={styles.iconlinks}>
                <FacebookIcon />
            </div>
            <div className={styles.iconlinks}>
                <TwitterIcon />
            </div>
            <div className={styles.iconlinks}>
                <InstagramIcon />
            </div>
            <div className={styles.iconlinks}>
                <YoutubeIcon />
            </div>
            
        </div>
    )
}

export default SocialLinks;
