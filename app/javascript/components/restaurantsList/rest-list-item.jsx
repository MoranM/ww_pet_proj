import React from 'react';
import _ from 'lodash';
import style from './rest-list.scss';


const RestListItem = (props) => {
  const rest = props.value;
  const rating = parseInt(rest.avg_rating);
  let stars = [];

  let counter = 0;
  _.times(rating, () => {
    stars.push(<i key={counter} className="fa fa-star" aria-hidden="true" />);
    counter++;
  });

  return (
    <li className={style.restLi}>
      <div className={style.cuisineWrapper}>
        <div className={style.cuisine} title={rest.cuisine_name}>{rest.cuisine_code}</div>
        <div className={style.description}>
          <div className="fontSize18">{rest.name}</div>
          <div>
            <span className="fontSize14 mR5">{rest.cuisine_name}</span>
            <span className="colorYellow">{stars}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default RestListItem;
