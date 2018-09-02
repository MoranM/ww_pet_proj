import {
    FETCH_RESTAURANTS_FAILED,
    FETCH_RESTAURANTS_START,
    FETCH_RESTAURANTS_SUCCESS,
    FILTER_RESTAURANTS,
    DELIVERY_30,
    DELIVERY_ABOVE_60,
    DELIVERY_30_60
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
    const ratingFilter = action.filters.rating;
    const cuisineFilter = action.filters.cuisine;
    const delivery = action.filters.delivery;

    console.log("filter", action.filters);

    if(nameFilter){
        origCopy = origCopy.filter(r => r.name.includes(nameFilter))
    }

    if(cuisineFilter && cuisineFilter != "All"){
        origCopy = origCopy.filter(r => r.cuisine_code === cuisineFilter);
    }

    if(ratingFilter){
        origCopy = origCopy.filter(r => r.avg_rating >= ratingFilter);
    }

    if(delivery){
        switch (delivery) {
            case DELIVERY_30:
                origCopy = origCopy.filter(r => r.max_delivery_time <= 30);
            case DELIVERY_30_60:
                origCopy = origCopy.filter(r => r.max_delivery_time > 30 && r.max_delivery_time <= 60);
            case DELIVERY_ABOVE_60:
                origCopy = origCopy.filter(r => r.max_delivery_time > 60);
            default:
                break;
        }
    }

    return {...state, restaurants: origCopy}
}

export default restaurants;
