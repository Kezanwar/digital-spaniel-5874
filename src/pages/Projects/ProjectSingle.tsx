import React, { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../types/store';
import { ProjectSingleHero } from '../../components/sections/ProjectSingleHero';
import { fetchProjectsAction } from '../../store/slices/recent-projects/recent-projects.actions';

const ProjectSingle = () => {
  const params = useParams();
  const dispatch: AppDispatch = useDispatch();
  const { loading, error, isFetched, projects } = useSelector(
    (state: RootState) => state.recentProjects
  );

  const thisProject = useMemo(() => {
    if (params?.id && projects?.length) {
      return projects?.find((p) => p.id === params?.id);
    } else return null;
  }, [params?.id, projects]);

  useEffect(() => {
    if (!isFetched && !projects && !loading) {
      dispatch(fetchProjectsAction);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!thisProject) return null;

  return (
    <main className="ProjectSingle">
      <ProjectSingleHero
        title={thisProject.title}
        id={thisProject.id}
        cover={thisProject.cover_image}
      />
    </main>
  );
};

export default ProjectSingle;
