import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";

const styles = {
  app: {
    paddingTop: 40,
    textAlign: "center"
  }
};

class App extends Component {
  render() {
    return (
      <Header>
        <div style={styles.app}>Welcome to React!</div>
      </Header>
    );
  }
}

const root = document.querySelector("#app");
ReactDOM.render(<App />, root);
