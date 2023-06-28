import React, { useEffect, useMemo } from 'react';

import { AppDispatch, RootState } from '@app/types/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjectsAction } from '@app/store/slices/recent-projects/recent-projects.actions';

import { SectionWrapper } from '@app/components/layout/SectionWrapper';
import { Heading } from '@app/components/typography/Heading';
import { RecentProjectsGrid } from '@app/components/features/RecentProjectsGrid';
import { LoadingLottie } from '@app/components/elements/LoadingLottie';
import { ErrorLottie } from '@app/components/elements/ErrorLottie';
import { CustomLink } from '../../buttons/CustomLink';

const Loading = () => {
  return (
    <div className="projects__fetching">
      <h5>Fetching projects...</h5>
      <LoadingLottie />
    </div>
  );
};

const Error = () => {
  return (
    <div className="projects__fetching">
      <h5>Unable to find projects</h5>
      <ErrorLottie />
    </div>
  );
};

const RecentProjectsSection: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { loading, error, isFetched, projects } = useSelector(
    (state: RootState) => state.recentProjects
  );

  useEffect(() => {
    if (!isFetched && !projects && !loading) {
      dispatch(fetchProjectsAction);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const content = useMemo(() => {
    if (loading) return <Loading />;
    if (error) return <Error />;
    if (projects) return <RecentProjectsGrid projects={projects} />;
    else return <Error />;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, loading, projects]);

  return (
    <SectionWrapper className="section__recent-projects">
      <div className="title-container">
        <Heading text="Some of our" spanText="Recent projects" />
      </div>
      <div>{content}</div>
    </SectionWrapper>
  );
};

export default RecentProjectsSection;
