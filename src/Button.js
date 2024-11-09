import React from 'react';

const Button = ({ onClick, children }) => (
  <button onClick={onClick} className="button">
    {children}
  </button>
);

export default Button;
