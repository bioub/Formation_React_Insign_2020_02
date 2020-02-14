import React from 'react';
import classnames from 'classnames';
import css from './Button.module.scss';

function Button({ size = 'medium', children }) {

  return (
    <div className={classnames(css.Button, css[size], {open: true})}>
       {children}
    </div>
  );
}

export {
  Button,
}
