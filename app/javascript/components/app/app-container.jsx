import React from 'react';
import style from './app-container.scss';
import Header from '../appHeader/header';
import { connect } from 'react-redux';
import { fetchRestaurantsAsync } from '../../actions';
import RestaurantsList from '../restaurantsList/rest-list';
import { Grid, Row, Col } from 'react-bootstrap';
import FilterBoxContainer from '../filterBox/filter-box-conainer';
import Map from '../map/map';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }

  componentDidMount() {
    this.props.fetchRestaurants();
  }

  render() {
    return (
      <Grid fluid={true} className={style.mainContainer}>
        <Row>
          <Col xs={12}>
            <Header/>
          </Col>
        </Row>
        <FilterBoxContainer/>
        <Row>
          <Col xs={3}>

            <RestaurantsList restaurants={this.props.restaurants}/>
          </Col>
          <Col xs={9}>
            <Map restaurants={this.props.restaurants}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRestaurants: () => dispatch(fetchRestaurantsAsync()),
  };
};

function mapStateToProps(state) {
  return {
    loading: state.loading,
    err: state.err,
    restaurants: state.restaurants,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
