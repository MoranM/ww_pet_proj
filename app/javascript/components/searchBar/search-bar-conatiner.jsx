import React from 'react';
import SearchBar from './search-bar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { filterRestaurants } from '../../actions/index';

class SearchBarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(term) {
    this.props.filterRestaurants({
      name: term,
    });
  }

  render() {
    return (
      <SearchBar onSearchTerm={this.handleSearch} />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ filterRestaurants }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBarContainer);
