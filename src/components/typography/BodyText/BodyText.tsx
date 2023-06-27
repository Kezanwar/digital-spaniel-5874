import React from 'react';

type Props = React.HTMLAttributes<HTMLElement>;

const BodyText: React.FC<Props> = ({ children }) => {
  return <p className="body-text">{children}</p>;
};

export default BodyText;
