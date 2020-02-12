import React, { Component } from 'react';

// const Hello = ({name}) => <div>{name}</div>;

function MultiStateButton({ values = [], onSelect }) {
  let arrayOfJsx = values.map((v) => (
    <button key={v} onClick={() => onSelect(v)}>
      {v}
    </button>
  ));

  return <div className="MultiStateButton">{arrayOfJsx}</div>;
}

class MultiStateButtonParent extends Component {
  state = {
    items: ['Rouge', 'Vert', 'Bleu'],
    lastClick: '',
  };
  render() {
    return (
      <div>
        <MultiStateButton
          values={this.state.items}
          onSelect={(val) => {
            this.setState({
              lastClick: val,
            });
          }}
        />
        {this.state.lastClick && (
          <p>Vous avez cliqué sur {this.state.lastClick}</p>
        )}
      </div>
    );
  }
}

export { MultiStateButton, MultiStateButtonParent };
