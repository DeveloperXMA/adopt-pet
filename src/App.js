import React from "react";
import { render } from "react-dom";
import Results from './results';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt me!</h1>
        <Results />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
