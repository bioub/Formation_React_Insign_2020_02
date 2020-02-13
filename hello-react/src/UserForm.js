import React, { Component } from "react";

class UserForm extends Component {
  state = {
    prenom: 'Jean',
    nom: 'Dupont',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const user = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          Prénom : <input name="prenom" value={user.prenom} onChange={this.handleChange} />
        </p>
        <p>
          Nom : <input name="nom" value={user.nom} onChange={this.handleChange} />
        </p>
        <p>
          <button>Go</button>
        </p>
      </form>
    )
  }
}

export { UserForm };
