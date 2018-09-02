import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap'
import {DELIVERY_30, DELIVERY_30_60, DELIVERY_ABOVE_60} from "../../constants";
import style from './filter-box.scss';

const FilterBox = (props) => {
        function handleCuisineFilterChange(e){
            props.onFilterSelected({
                cuisine: e.target.value
            });
        }

        function handleRatingFilter(e) {
            props.onFilterSelected({
                rating: e.target.value
            });
        }

        function handleDeliveryFilter(e){
            props.onFilterSelected({
                delivery: e.target.value
            });
        }

        return (
            <Grid fluid={true}>
                <Row className={style.container}>
                    <Col xs={4}>
                        <div>
                            <label className="fontSize12 mR10">Cuisine:</label>
                            <select onChange={handleCuisineFilterChange}>
                                <option value={"All"}>All</option>
                                {props.cuisines.map(c => {
                                    return <option key={c.id} value={c.code}>{c.name}</option>
                                })}
                            </select>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div>
                            <label className="fontSize12 mR10">Rating:</label>
                            <select onChange={handleRatingFilter}>
                                <option selected={true} value={0}>none</option>
                                <option value={1}>1 Star</option>
                                <option value={2}>2 Stars</option>
                                <option value={3}>3 Stars</option>
                            </select>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div>
                            <label className="fontSize12 mR10">Delivery time:</label>
                            <select onChange={handleDeliveryFilter}>
                                <option selected={true} value={0}>none</option>
                                <option value={DELIVERY_30}>up to 30 min</option>
                                <option value={DELIVERY_30_60}>30-60 min</option>
                                <option value={DELIVERY_ABOVE_60}>1h and above</option>
                            </select>
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
}

export default FilterBox;