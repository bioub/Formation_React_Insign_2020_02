import React, { Component, useState } from "react";

// class UncontrolledCounter extends Component {
//   state = {
//     count: 0,
//   };

//   handleClick = () => {
//     this.setState({
//       count: this.state.count + 1,
//     })
//   }
//   render() {
//     const { count } = this.state;
//     return <button className="UncontrolledCounter" onClick={this.handleClick}>{ count }</button>;
//   }
// }

function UncontrolledCounter() {
  const [count, setCount] = useState(0);

  return (
    <button className="UncontrolledCounter" onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

export { UncontrolledCounter };
