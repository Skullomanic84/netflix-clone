import React from 'react';
import Search from '../SearchIcon';
import styles from './SecondaryNavigation.module.css';
import Notification from '../NotificationIcon';
import UserMenu from '../UserMenuIcon'
import Billboardsetting from '../BillboardSetting/Billboardsetting';

function SecondaryNavigation() {
    return (
        <div className={styles.secondarynav}>

                <div className={styles.navItems}>
                    <Search />
                </div>
                <div className={styles.navItems}>
                    <Notification />
                </div>
                <div className={styles.navItems}>
                    <UserMenu />
                </div>
                <div className={styles.navItems}>
                    <Billboardsetting />
                </div>

          
            
        </div>
    )
}

export default SecondaryNavigation;
