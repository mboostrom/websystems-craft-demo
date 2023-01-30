import React from 'react';

const Button = ({ link, children, divClassName }) => {
  return (
    <a href={link} className={link === '' ? "empty-link": ""} target='_blank'>
      <div className={divClassName}>{children}</div>
    </a>
  );
};

export default Button;