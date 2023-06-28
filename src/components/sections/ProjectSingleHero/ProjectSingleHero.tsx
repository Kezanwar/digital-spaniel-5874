import React from 'react';
import { motion } from 'framer-motion';
import { Heading } from '../../typography/Heading';
import { SectionWrapper } from '../../layout/SectionWrapper';

type Props = {
  cover: string;
  id: string;
  title: string;
};

const ProjectSingleHero: React.FC<Props> = ({ cover, id, title }) => {
  return (
    <section className="project-single__hero">
      <SectionWrapper className="no-padding">
        <motion.img
          className="cover-image"
          layoutId={`project-img-${id}`}
          src={cover}
          alt=""
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.2 } }}
          transition={{ delay: 0.6 }}
          className="heading-container"
        >
          <Heading spanText="Project 137" text={title} />
        </motion.div>
      </SectionWrapper>
    </section>
  );
};

export default ProjectSingleHero;
