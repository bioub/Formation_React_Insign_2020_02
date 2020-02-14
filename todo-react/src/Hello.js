import React from 'react';

function Hello(props) {
    const name = props.match.params.name || '';

  return (
    <div className="Hello">
       Hello {name}
    </div>
  );
}

export default Hello;