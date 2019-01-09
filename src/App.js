import React from "react";
import { Router, Link } from "@reach/router";
import Results from "./Results";
import Details from "./Details";
import SearchParams from "./SearchParams";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Adopt me!</Link>
        </header>
        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
          <SearchParams path="/search-params" />
        </Router>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
