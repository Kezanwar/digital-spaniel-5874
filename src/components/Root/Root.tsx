import React, { ReactElement } from 'react';

type Props = {
  children: ReactElement;
};

const Root: React.FC<Props> = ({ children }) => {
  return <div className="Root">{children}</div>;
};

export default Root;
