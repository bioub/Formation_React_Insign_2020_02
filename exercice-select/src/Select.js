import React, { Component } from "react";
import './Select.css';

/*
Exercice :
1 - Ajouter les props items et selected et les afficher aux endroits correpondants
2 - Ajouter un state open (true/false), au clic de .Selected inverser open et masquer Items
3 - Au click d'un .Item, appeler la props onSelect avec la valeur en param
*/

class Select extends Component {
  render() {
    // this.props
    return (
      <div className="Select">
        <div className="Selected">A</div>
        <div className="Items">
          <div className="Item">A</div>
          <div className="Item">B</div>
          <div className="Item">C</div>
        </div>
      </div>
    );
  }
}

export { Select }