import React from 'react';
import RestListItem  from './rest-list-item'

const RestaurantsList = (props) => {
    const rests = props.restaurants;

    const listItems = rests.map(r => {
        return <RestListItem value={r} key={r.id.toString()} />
    });

    return (
        <ul>{listItems}</ul>
    )
};

export default RestaurantsList;