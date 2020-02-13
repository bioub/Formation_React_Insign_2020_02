import React, { Component, createRef } from "react";
import "./Select.css";

/*
Exercice :
1 - Ajouter les props items et selected et les afficher aux endroits correpondants
2 - Ajouter un state open (true/false), au clic de .Selected inverser open et masquer Items
(avec un rendering conditionnel ou une classe + CSS)
3 - Au click d'un .Item, appeler la props onSelect avec la valeur en param
*/

class Select extends Component {
  state = {
    open: false
  };

  selectRef = createRef();

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
  }

  handleDocumentClick = (event) => {
    // si on est dans l'élément on ne fait rien
    if (this.selectRef.current.contains(event.target)) {
      return;
    }
    
    this.setState({
      open: false,
    });
  }

  handleSelectClick = () => {
    this.setState({
      open: !this.state.open
    });
  };
  render() {
    const { items, selected } = this.props;
    const itemsJsx = items.map(it => (
      <div className="Item" key={it} onClick={() => this.props.onSelect(it)}>
        {it}
      </div>
    ));
    return (
      <div ref={this.selectRef} className="Select" onClick={this.handleSelectClick}>
        <div className="Selected">{selected}</div>
        {this.state.open && <div className="Items">{itemsJsx}</div>}
      </div>
    );
  }
}

export { Select };
