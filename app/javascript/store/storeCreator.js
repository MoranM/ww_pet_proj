import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';


export const initialState = {
    loading: false,
    err: "",
    restaurants: []
};


export const configureStore = () => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}