import React from 'react';

import { Tagline } from '@app/components/typography/Tagline';
import { Heading } from '@app/components/typography/Heading';
import { BodyText } from '@app/components/typography/BodyText';
import { CustomLink } from '@app/components/buttons/CustomLink';

import { PATH_CONTACT } from '@app/constants/paths.constants';

const HeroSection: React.FC = () => {
  return (
    <section className="section__hero">
      <div className="hero__left">
        <div className="__content">
          <Tagline>Brand, Dev, Ecom, Marketing </Tagline>
          <Heading text="We unleash" spanText="Business Potential" />
          <BodyText>
            We create brand experiences which are memorable and distinct. Our
            experienced team create and develop brands with personality and
            resonance.
          </BodyText>
          <CustomLink variant="branded" to={PATH_CONTACT}>
            Let's talk
          </CustomLink>
        </div>
      </div>
      <div className="hero__right" />
    </section>
  );
};

export default HeroSection;
