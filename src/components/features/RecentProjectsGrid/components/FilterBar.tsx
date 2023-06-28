import React from 'react';
import { FilterBy, GridFilterOption } from '../RecentProjectsGrid';

type Props = {
  filterOptions: GridFilterOption[];
  filterBy: FilterBy;
  handleFilterByAll: () => void;
};

const FilterBar: React.FC<Props> = ({
  filterOptions,
  filterBy,
  handleFilterByAll
}) => {
  if (!filterOptions?.length) return null;
  return (
    <div className="filter-bar">
      <button
        onClick={handleFilterByAll}
        className={`filter-btn ${filterBy === 'all' ? 'active' : ''}`}
      >
        All
      </button>
      {filterOptions.map((option) => {
        const { label, onClick, filterKey } = option;
        return (
          <button
            key={`button-${label}`}
            onClick={onClick}
            className={`filter-btn ${filterBy === filterKey ? 'active' : ''}`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default FilterBar;
