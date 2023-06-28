import React from 'react';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  variant: 'prev' | 'next';
  disabled: boolean;
}

const svg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.78033 12.7803C9.48744 13.0732 9.01256 13.0732 8.71967 12.7803L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967L8.71967 3.21967C9.01256 2.92678 9.48744 2.92678 9.78033 3.21967C10.0732 3.51256 10.0732 3.98744 9.78033 4.28033L6.06066 8L9.78033 11.7197C10.0732 12.0126 10.0732 12.4874 9.78033 12.7803Z"
      fill="currentColor"
    />
  </svg>
);

const ChevronButton: React.FC<Props> = ({
  onClick,
  variant = 'prev',
  disabled = false
}) => {
  return (
    <button
      onClick={onClick}
      className={`chev-btn ${disabled ? 'disabled' : ''} ${variant}`}
    >
      {svg}
    </button>
  );
};

export default ChevronButton;
