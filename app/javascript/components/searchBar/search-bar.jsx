import React from 'react';
import style from './search-bar.scss';

const SearchBar = (props) => {
  const searchTermPlaceHolder = 'Find a restaurant';

  function handleChange(event) {
    if (props.onSearchTerm) {
      props.onSearchTerm(event.target.value);
    }
  }

  return (
    <div className={style.box_container}>
      <i className="fa fa-search" aria-hidden="true" />
      <input type="text" placeholder={searchTermPlaceHolder} onChange={handleChange} />
    </div>
  );
};


export default SearchBar;
