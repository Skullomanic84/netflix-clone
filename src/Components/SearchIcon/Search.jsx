import React from 'react';
import styles from './Search.module.css'
import SearchIcon from './SearchIcon';

function Search() {
    return (
        <div className={styles.search}>
            <SearchIcon />
        </div>
    )
}

export default Search;
