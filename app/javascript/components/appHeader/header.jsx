import React from 'react';
import SearchBarContainer from '../searchBar/search-bar-conatiner';
import style from './header.scss';

const Header = (props) => {
  return (
    <div className={style.header_wrapper}>
      <div className={style.title}>WeEat</div>
      <SearchBarContainer />
    </div>
  );
};


export default Header;
