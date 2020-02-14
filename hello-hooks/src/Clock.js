import React, { Component, useState, useEffect } from "react";

// class Clock extends Component {

//   constructor(props) {
//     super();
//     this.state = {
//       format: 'HH:mm:ss',
//       now: new Date(),
//     };

//   }

//   componentDidMount() {
//     this._intervalId = setInterval(() => {
//       this.setState({ // merge
//         // pas besoin de repasser format
//         now: new Date(),
//       })
//     }, 1000);
//   }

//   componentDidUpdate() {

//   }

//   componentWillUnmount() {
//     clearInterval(this._intervalId);
//   }

//   render() {
//     // ici this.props (et pas props en param)
//     const { now } = this.state;
//     return <div className="Clock">{ now.toLocaleTimeString() }</div>;
//   }
// }

function Clock() {
  const [now, setDate] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return <div className="Clock">{now.toLocaleTimeString()}</div>;
}

export { Clock };
