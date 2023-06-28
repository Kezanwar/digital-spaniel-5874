import React, { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '@app/types/store';
import { ProjectSingleHero } from '@app/components/sections/ProjectSingleHero';
import { fetchProjectsAction } from '@app/store/slices/recent-projects/recent-projects.actions';

const ProjectSingle = () => {
  const params = useParams();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
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

    window.scrollTo({ top: 0, behavior: 'smooth' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!thisProject) return <div></div>;

  if (error) {
    navigate('/');
  }

  return (
    <main className="ProjectSingle">
      <ProjectSingleHero
        title={thisProject.title}
        id={thisProject.id}
        cover={thisProject.cover_image}
        date={thisProject.date}
        content={thisProject.content}
      />
    </main>
  );
};

export default ProjectSingle;
