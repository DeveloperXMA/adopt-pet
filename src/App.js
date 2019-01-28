import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import store from "./store";
import Results from "./Results";
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

ReactDOM.render(<App />, document.getElementById("root"));
