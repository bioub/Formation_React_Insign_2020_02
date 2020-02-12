import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Select } from "./Select";

class App extends Component {
  state = {
    couleurs: ["Rouge", "Vert", "Bleu"],
    couleurSelectionnee: "Rouge"
  };
  handleSelect = val => {
    this.setState({
      couleurSelectionnee: val
    });
  };
  render() {
    return (
      <div className="App">
        <Select
          items={this.state.couleurs}
          selected={this.state.couleurSelectionnee}
          onSelect={this.handleSelect}
        />
      </div>
    );
  }
}

export default App;
