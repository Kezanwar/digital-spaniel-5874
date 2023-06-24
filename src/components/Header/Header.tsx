import React from 'react';

// redux
import { useSelector } from 'react-redux';
import { RootState } from '@app/store/store';

import Johnny from '@app/assets/johnny-testimonial.png';
import Mary from '@app/assets/mary-testimonial.png';
import Paul from '@app/assets/paul-testimonial.png';

const Header: React.FC = (props) => {
  const { mobileNavOpen } = useSelector((state: RootState) => state.nav);
  console.log(mobileNavOpen);
  return (
    <div className="Header">
      {[Johnny, Mary, Paul].map((image) => (
        <img src={image} alt=""></img>
      ))}
    </div>
  );
};

export default Header;
