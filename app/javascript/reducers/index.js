import {
    FETCH_RESTAURANTS_FAILED,
    FETCH_RESTAURANTS_START,
    FETCH_RESTAURANTS_SUCCESS,
    FILTER_RESTAURANTS
} from "../constants";

import {initialState} from '../store/storeCreator'

let origDataSet = [];

const restaurants = (state = initialState, action) => {
    let restaurants = null;

    switch (action.type) {
        case FETCH_RESTAURANTS_START:
            return {...state, loading: true};
        case FETCH_RESTAURANTS_FAILED:
            return {...state, loading: false, err: action.payload};
        case FETCH_RESTAURANTS_SUCCESS:
            origDataSet = action.payload;
            return {...state, loading: false, err: "", restaurants: action.payload}
        case FILTER_RESTAURANTS:
            return filterRestaurants(state, action);
        default:
            return state;

    }
}

const filterRestaurants = (state, action) => {
    let origCopy = [...origDataSet];

    const nameFilter = action.filters.name;

    if(nameFilter){
        origCopy = origCopy.filter(r => r.name.includes(nameFilter))
    }

    return {...state, restaurants: origCopy}
}

export default restaurants;
