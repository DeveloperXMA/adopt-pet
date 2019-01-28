import React from 'react';
import SearchBox from "./SearchBox";
import { navigate } from '@reach/router';

export default class SearchParams extends React.Component {

  search() {
    navigate('/');
  }

  render () {
    return (
        <div className="search-route">
            <SearchBox search={this.search} />
        </div>
    )
  }
}
