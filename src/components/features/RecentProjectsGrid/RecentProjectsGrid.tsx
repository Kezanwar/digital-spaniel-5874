import React, { useMemo, useState } from 'react';

import { Project } from '@app/types/projects';

import { getFilterLabel } from '@app/utilities/strings/strings';
import { FilterBar, Grid } from './components';

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

  const filterByAll = () => setFilterBy('all');

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

  return (
    <div className="recent-projects-grid__wrapper">
      <div className="filter-section">
        <FilterBar
          filterOptions={filterOptions}
          filterByAll={filterByAll}
          filterBy={filterBy}
        />
      </div>
      <Grid projects={filteredProjects} />
    </div>
  );
};

export default RecentProjectsGrid;
