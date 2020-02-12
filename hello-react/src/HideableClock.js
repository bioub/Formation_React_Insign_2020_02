import React, { Component } from 'react';
import { Clock } from './Clock';

class HideableClock extends Component {
  state = {
    show: true,
  };
  handleClick = () => {
    this.setState({
      show: !this.state.show,
    });
  }
  render() {
    const { show } = this.state;
    return (
      <div className="HideableClock" onClick={this.handleClick}>
        <button>{show ? 'Off' : 'On'}</button>{/* if else */}
        {show && <Clock />} {/* if simple */}
      </div>
    );
  }
}

export { HideableClock };
