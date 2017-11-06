import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "./app/components/header/Header";

class App extends Component {
  render() {
    return (
      <div>Welcome to React!</div>
    );
  }
}

const root = document.querySelector("#app");
ReactDOM.render(<App />, root);
