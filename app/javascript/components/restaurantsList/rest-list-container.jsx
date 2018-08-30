import React ,{Component} from 'react';
import RestaurantsList from './rest-list';


class RestListContainer extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <RestaurantsList restaurants={this.props.restaurants}/>
        )
    }
}

export default RestListContainer;