import React from 'react';
import style from './app-container.scss';
import Header from '../appHeader/header';
import {connect} from 'react-redux';
import {fetchResturantsAsync} from "../../actions";
import RestaurantsList from '../restaurantsList/rest-list';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: []
        }
    }

    componentDidMount(){
        this.props.fetchRestaurants();
    }


    render() {
        console.log('props', this.props);
        return (
            <div className={style.mainContainer}>
                <Header />
                <div className={style.contentWrapper}>
                    <div className={style.leftPane}>
                        <RestaurantsList restaurants={this.props.restaurants} />
                    </div>
                    <div className={style.rightPane}>

                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRestaurants: () => dispatch(fetchResturantsAsync())
    };
};

function mapStateToProps(state) {
    return{
        loading: state.loading,
        err: state.err,
        restaurants: state.restaurants
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (AppContainer);