import React from "react";
import _ from 'lodash';
import style from './rest-list.scss';

const RestListItem = (props) => {
    const rest = props.value;
    const rating = parseInt(rest.avg_rating);
    let stars = [];

    let counter = 0;
    _.times(rating, () => {
        stars.push(<i key={counter} className="fa fa-star" aria-hidden="true"></i>)
        counter++
    })

    return (
        <li className={style["rest-li"]}>
            <div className={style["cuisine-name-wrapper"]}>
                <div className={style.cuisine} title={rest.cuisine_name}>{rest.cuisine_code}</div>
                <div>{rest.name}</div>
            </div>
            <div>{stars}</div>
        </li>
    )
}


export default RestListItem;