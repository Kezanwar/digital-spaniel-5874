import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Project } from '@app/types/projects';
import { PATH_PROJECT } from '../../../../constants/paths.constants';
import { CustomLink } from '../../../buttons/CustomLink';
import { useNavigate } from 'react-router';

type Props = {
  projects: Project[];
};

const Grid: React.FC<Props> = ({ projects }) => {
  const navigate = useNavigate();

  return (
    <motion.div layout className="recent__grid">
      {projects.map((p, i) => {
        const toProject = () => navigate(`${PATH_PROJECT}/${p.id}`);
        return (
          <motion.div
            onClick={toProject}
            layout
            key={p.id}
            className="recent-item"
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layoutId={`project-img-${p.id}`}
              className="img"
              src={p.cover_image}
            />
            <div className="overlay">
              <h4>{p.title}</h4>
              <p>{p.caption}</p>
              <span className="link">Full project</span>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Grid;
