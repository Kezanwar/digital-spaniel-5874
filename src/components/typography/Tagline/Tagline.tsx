import React from 'react';

const Tagline: React.FC<React.HTMLAttributes<HTMLElement>> = ({ children }) => {
  return <p className="tagline">{children}</p>;
};

export default Tagline;
