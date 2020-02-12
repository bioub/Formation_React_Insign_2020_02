import React from "react";

function Hello() {
  return (
    <div className="Hello">
      <span>Hello</span>
    </div>
  );
  // return React.createElement('div', { className: 'Hello' },
  //   React.createElement('span', {}, 'Hello')
  // );
}

export { Hello };
