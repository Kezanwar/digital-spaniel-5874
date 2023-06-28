import React, { useMemo, useState } from 'react';

import { Project } from '@app/types/projects';

import { getFilterLabel } from '@app/utilities/strings/strings';
import { FilterBar, Grid } from './components';
import { CustomLink } from '@app/components/buttons/CustomLink';
import { proxiedArray } from '../../../utilities/numbers/numbers';
import { ChevronButton } from '../../buttons/ChevronButton';

type Props = {
  projects: Project[];
};

export type GridFilterOption = {
  label: string;
  filterKey: string;
  onClick: () => void;
};

export type FilterBy = string | null;

const RecentProjectsGrid: React.FC<Props> = ({ projects }) => {
  const [filterBy, setFilterBy] = useState<FilterBy>('all');

  const handleFilterByAll = () => setFilterBy('all');

  const filterOptions: GridFilterOption[] = useMemo(() => {
    if (projects?.length) {
      const uniqueFilters: string[] = [
        ...new Set(projects.map((proj) => proj.categories).flat(1))
      ];
      return uniqueFilters.map((p): GridFilterOption => {
        return {
          label: getFilterLabel(p),
          filterKey: p,
          onClick: () => {
            setFilterBy(p);
          }
        };
      });
    } else return [];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (!projects?.length) return [];
    if (!filterBy || filterBy === 'all') return projects;
    else return projects.filter((p) => p.categories.includes(filterBy));
  }, [filterBy, projects]);

  const proxy = proxiedArray(filterOptions);

  const handleNextClick = () => {
    if (!filterOptions) return;
    let next = 'all';
    if (filterBy === 'all') {
      next = filterOptions[0].filterKey;
    }
    if (filterBy !== 'all') {
      const nextIndex =
        filterOptions.findIndex((fo) => fo.filterKey === filterBy) + 1;

      next = filterOptions[nextIndex]?.filterKey || 'all';
    }
    setFilterBy(next);
  };

  const handlePrevClick = () => {
    if (!filterOptions) return;
    let prev = 'all';
    if (filterBy === 'all') {
      prev = proxy[-1].filterKey;
    } else {
      const thisIndex = filterOptions.findIndex(
        (fo) => fo.filterKey === filterBy
      );
      prev = filterOptions[thisIndex - 1]?.filterKey || 'all';
    }
    setFilterBy(prev);
  };

  return (
    <div className="recent-projects-grid__wrapper">
      <div className="filter-section">
        <FilterBar
          filterOptions={filterOptions}
          handleFilterByAll={handleFilterByAll}
          filterBy={filterBy}
        />
      </div>
      <Grid projects={filteredProjects} />
      <div className="see-all-wrapper">
        <CustomLink variant="branded" to={'/work'}>
          See all work
        </CustomLink>
        <div className="controls-container">
          <ChevronButton
            variant="prev"
            onClick={handlePrevClick}
            disabled={filterBy === 'all'}
          />
          <ChevronButton
            variant="next"
            disabled={
              filterBy === filterOptions[filterOptions.length - 1].filterKey
            }
            onClick={handleNextClick}
          />
        </div>
      </div>
    </div>
  );
};

export default RecentProjectsGrid;
