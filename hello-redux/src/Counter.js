import React from 'react';
import { connect } from 'react-redux';

// function Counter({ cpt, onIncrement }) {
//   return (
//     <button className="Counter" onClick={onIncrement}>
//       {cpt}
//     </button>
//   );
// }

function Counter({ cpt, onIncrement }) {
  return (
    <button className="Counter" onClick={onIncrement}>
      {cpt}
    </button>
  );
}

function mapStateToProps(state) {
  return {
    cpt: state.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement() {
      dispatch({ type: 'INCREMENT_COUNT' });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
