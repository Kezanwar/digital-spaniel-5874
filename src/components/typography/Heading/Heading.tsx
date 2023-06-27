import React from 'react';

interface Props extends React.HTMLAttributes<HTMLElement> {
  text: string;
  spanText: string;
}

const Heading: React.FC<Props> = ({ text, spanText }) => {
  return (
    <h2 className="heading">
      {text} <span>{spanText}</span>
    </h2>
  );
};

export default Heading;
