import React from 'react';


class SearchBar extends React.Component{
    searchTermPlaceHolder = "Find a restaurant";

    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){

    }

    render() {
        return(
            <div>
                <input type="text" placeholder={this.searchTermPlaceHolder} onChange={this.handleChange} />
            </div>
        )
    }
}

export default SearchBar;