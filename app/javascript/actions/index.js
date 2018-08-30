import {
    FILTER_RESTAURANTS,
    FETCH_RESTAURANTS_START,
    FETCH_RESTAURANTS_FAILED,
    FETCH_RESTAURANTS_SUCCESS, BASE_URL
} from "../constants";


export const fetchRestaurants = () =>{
    return {
        type: FETCH_RESTAURANTS_START
    }
}

export const fetchRestaurantsSuccess = (restaurants) =>{
    return {
        type: FETCH_RESTAURANTS_SUCCESS,
        payload: restaurants
    }
}

export const fetchRestaurantsFailed = (err) =>{
    return {
        type: FETCH_RESTAURANTS_FAILED,
        payload: err
    }
}

export const filterRestaurants = (filters) =>{
    const action = {
        type: FILTER_RESTAURANTS,
        filters
    }

    return action;
}

export const fetchResturantsAsync = () => {
    const url = BASE_URL + 'restaurants.json';
    return (dispatch) => {
        dispatch(fetchRestaurants());

        fetch(url)
            .then(res => {

                if (!res.ok) {
                    throw Error(res.statusText);
                }

                return res.json()
            })
            .then(restaurants => {
                dispatch(fetchRestaurantsSuccess(restaurants))
            })
            .catch((err) => dispatch(fetchRestaurantsFailed(err)));
    }
}