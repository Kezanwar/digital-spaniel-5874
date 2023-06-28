import React from 'react';

interface Props extends React.DOMAttributes<HTMLElement> {
  className?: string;
}

const SectionWrapper: React.FC<Props> = ({ children, className }) => {
  return (
    <section className={`section__wrapper ${className || ''}`}>
      <div className="section__content">{children}</div>
    </section>
  );
};

export default SectionWrapper;
