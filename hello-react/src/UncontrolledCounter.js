import React, { Component } from 'react';

class UncontrolledCounter extends Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  render() {
    const { count } = this.state;
    return <button className="UncontrolledCounter" onClick={this.handleClick}>{ count }</button>;
  }
}

export { UncontrolledCounter };
