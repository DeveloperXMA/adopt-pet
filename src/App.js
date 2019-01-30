import React from "react";
import { Router, Link } from "@reach/router";
import store from "./store";
import Results from "./results";
import Details from "./Details";
import SearchParams from "./SearchParams";
import {
  Provider
} from "react-redux";

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <header>
            <Link to="/">Adopt me!</Link>
            <Link to="/search-params">
              <span aria-label="search" role="img">
                🔍
            </span>
            </Link>
          </header>
            <Router>
              <Results path="/" />
              <Details path="/details/:id" />
              <SearchParams path="/search-params" />
            </Router>
        </div>  
      </Provider>
    );
  }
}

export default App;
