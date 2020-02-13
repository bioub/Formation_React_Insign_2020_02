import React from 'react';

function ControlledCounter({ count, onIncrement }) {
  return (
    <button className="ControlledCounter" onClick={onIncrement}>
      {count}
    </button>
  );
}

export { ControlledCounter };
