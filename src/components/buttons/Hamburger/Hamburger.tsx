import React from 'react';

interface Props extends React.DOMAttributes<HTMLButtonElement> {
  open: boolean;
}

const Hamburger: React.FC<Props> = ({ open, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`hamburger-btn ${open ? 'open' : ''}`}
    />
  );
};

export default Hamburger;
