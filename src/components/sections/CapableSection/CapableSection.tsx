import React from 'react';

import { SectionWrapper } from '@app/components/layout/SectionWrapper';
import { Heading } from '@app/components/typography/Heading';
import { BodyText } from '@app/components/typography/BodyText';
import { CustomLink } from '@app/components/buttons/CustomLink';
import LinkColumn, {
  LinkColItem
} from '@app/components/features/LinkColumn/LinkColumn';

import { PATH_SERVICES } from '@app/constants/paths.constants';

const brandLinks: LinkColItem[] = [
  { label: 'Brand Strategy', to: '/' },
  { label: 'Logo & Name', to: '/' },
  { label: 'Identity & Collateral', to: '/' }
];

const developmentLinks: LinkColItem[] = [
  { label: 'eCommerce', to: '/' },
  { label: 'Web Development', to: '/' },
  { label: 'Mobile Apps', to: '/' }
];

const CapableSection: React.FC = () => {
  return (
    <SectionWrapper className="section__capable">
      <div className="left__content">
        <Heading text="What are" spanText="We Capable Of" />

        <BodyText>
          By focusing on design as an enabler and putting a huge emphasis on our
          clients as co-producers, we create innovative, sustainable marketing
          that enhances brand experience and user engagement.
        </BodyText>
        <CustomLink variant="branded" to={PATH_SERVICES}>
          Our process
        </CustomLink>
      </div>
      <div className="right__content">
        <div className="links__grid">
          <div className="left__grid">
            <LinkColumn title="Brand" links={brandLinks} />
            <LinkColumn title="Development" links={developmentLinks} />
          </div>
          <div className="right__grid">
            <LinkColumn title="Development" links={developmentLinks} />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CapableSection;
