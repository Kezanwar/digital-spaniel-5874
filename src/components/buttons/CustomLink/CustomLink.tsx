import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface Props extends LinkProps {
  variant: 'white' | 'branded';
}

const CustomLink: React.FC<Props> = (props) => {
  const { variant = 'branded', to, children } = props;
  return (
    <Link to={to} className={`custom-link ${variant}`}>
      {children}
    </Link>
  );
};

export default CustomLink;
