import React from 'react';
import styles from './FooterLink.module.css'

function FooterLinks() {

    const links = [
        'Audio and Subtitles',
        'Audio Description',
        'Help Center',
        'Gift Cards',
        'Media Center',
        'Investor Relations',
        'Jobs',
        'Terms of use',
        'Privacy',
        'Legal Notice',
        'Cookies Preferences',
        'Impressum',
        'Contact Us',

    ]
    return (
        <div className={styles.footerwrapper}>
            <ul className={styles.linklist}>
                {links.map((item) =>(
                    <li 
                    className={styles.links}
                    key={item}>
                    {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterLinks;
