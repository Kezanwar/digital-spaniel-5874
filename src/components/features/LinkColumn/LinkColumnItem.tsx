import React from 'react';
import { LinkColItem } from './LinkColumn';
import { Link } from 'react-router-dom';

type Props = {
  link: LinkColItem;
};

const LinkColumnItem: React.FC<Props> = ({ link }) => {
  return (
    <Link to={link.to} className="link__item">
      {link.label}
    </Link>
  );
};

export default LinkColumnItem;
