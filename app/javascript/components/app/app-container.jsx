import React from 'react';
import style from '../../packs/main_style.scss';
import constants from '../constants';
import Header from '../appHeader/header';


class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: []
        }
    }

    componentDidMount(){
        this.fetchRestData();
    }

    fetchRestData() {
        const url = constants.BASE_URL + 'restaurants.json';
        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(data => {
                let rest = data;
                console.log('restaurants', rest);
            });

    }

    render() {
        return (
            <div className={style["app-main-container"]}>
                <Header />

            </div>
        )
    }
}

export default AppContainer;