import React from 'react';
import { string } from 'prop-types';

function Hello({ name }) {
  return <div className="Hello">Hello {name}</div>;
}

Hello.propTypes = {
  name: string.isRequired,
};

export { Hello };
