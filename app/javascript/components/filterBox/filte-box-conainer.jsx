import React from "react";
import {BASE_URL} from "../../constants";
import FilterBox from './filter-box';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {filterRestaurants} from '../../actions/index';

class FilterBoxContainer extends React.Component {
    constructor(props) {
        super(props);

        this.filterRestaurants = this.filterRestaurants.bind(this);

        this.state = {
            cuisines: []
        }
    }

    componentDidMount() {
        this.fetchCuisine();
    }

    fetchCuisine() {
        const url = BASE_URL + "cuisines.json"
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText);
                }

                return res.json()
            })
            .then(cuisines => {
                this.updateState(cuisines)
            }).catch(err => {alert("Unable to fetch cuisines.")})
    }

    updateState(cuisines) {
        this.setState({cuisines});
    }

    filterRestaurants(filter){
        this.props.filterRestaurants(filter);
    }

    render() {
        let filterBox = this.state.cuisines.length > 0
            ? <FilterBox cuisines={this.state.cuisines} onFilterSelected={this.filterRestaurants}/>
            : null;

        return (

            filterBox
        )
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({filterRestaurants}, dispatch);
}

export default connect(null, mapDispatchToProps)(FilterBoxContainer);