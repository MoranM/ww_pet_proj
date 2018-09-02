import React, {Component} from 'react';
import {withGoogleMap, GoogleMap, Marker, InfoWindow} from 'react-google-maps';
import RestListItem from "../restaurantsList/rest-list-item";


class Map extends Component {
    render() {
        let rest = this.props.restaurants || [];
        let openedMarkers = {};

        const MapWrapper = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{lat: 32.077632, lng: 34.77079}}
                defaultZoom={10}
            >
                {rest.map((r) => {
                    return (
                        <Marker
                            key={r.id}
                            position={{lat: r.latitude, lng: r.longitude}}
                            onClick={() => {openedMarkers[r.id] = true;}}
                        >
                            {
                                openedMarkers[r.id] &&
                                <InfoWindow>
                                    <RestListItem value={r} />
                                </InfoWindow>
                            }

                        </Marker>
                    )
                })}
            </GoogleMap>
        ));

        return (
            <div>
                <MapWrapper
                    containerElement={<div style={{height: `400px`, width: '100%'}}/>}
                    mapElement={<div style={{height: `100%`}}/>}
                />
            </div>
        );
    }
};

export default Map;