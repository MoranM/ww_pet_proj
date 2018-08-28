import React from 'react';
import SearchBar from '../searchBar/search-bar';
import style from './header.scss';

const Header = (props) => {
    return (
        <div className={style.header_wrapper}>
            <div className={style.title}>WeEat</div>
            <SearchBar />
        </div>
    )
}


export default Header;