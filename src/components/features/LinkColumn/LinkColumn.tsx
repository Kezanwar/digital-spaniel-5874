import React from 'react';
import LinkColumnItem from './LinkColumnItem';

export type LinkColItem = {
  to: string;
  label: string;
};

type Props = {
  links: LinkColItem[];
  title: string;
};

const LinkColumn: React.FC<Props> = ({ links, title }) => {
  if (!links?.length) return null;
  return (
    <div className="link__column">
      <h4>{title}</h4>
      {links.map((l) => (
        <LinkColumnItem link={l} />
      ))}
    </div>
  );
};

export default LinkColumn;
