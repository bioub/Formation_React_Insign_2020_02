import React, { Component } from "react";
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
    const { couleurs, couleurSelectionnee } = this.state;
    return (
      <div className="App">
        <Select
          items={couleurs}
          selected={couleurSelectionnee}
          onSelect={this.handleSelect}
        />
        <Select
          items={couleurs}
          selected={couleurSelectionnee}
          onSelect={this.handleSelect}
        />
        <p>Vous avez sélectionné : {couleurSelectionnee}</p>
      </div>
    );
  }
}

export default App;
