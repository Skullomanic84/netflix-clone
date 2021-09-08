import React from 'react';
import styles from './Navigation.module.css';
import logo from './Assets/logo.png';
import SecondaryNavigation from '../SecondaryNavigation/SecondaryNavigation';


function Navigation() {

    const navItems = [
        'Home',
        'Tv Shows',
        'Movies',
        'New & Popular',
        'My List'
    ]

    return (
        <div className={styles.navigation}>
        <div className={styles.mainNavigation}>
            <img 
                className={styles.logo}
                src={logo} 
                alt="netflix logo"
                />
                <ul className={styles.navigationList}>
                    {navItems.map((item) => (
                        <li 
                        className={styles.navigationItem}
                        key={item}><a href="/">
                        {item}
                        </a>
                        </li>
                    ))}
                </ul>
        </div>
        <div>
        <SecondaryNavigation />
        </div>
            
           
        </div>

    )
}

export default Navigation
