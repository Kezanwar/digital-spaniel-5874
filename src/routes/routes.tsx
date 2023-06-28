import React from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// guards

// layouts

// pages
import Home from '../pages/Home/Home';
import ProjectSingle from '../pages/Projects/ProjectSingle';

// config

// ----------------------------------------------------------------------

const Router: React.FC = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/project/:id',
      element: <ProjectSingle />
    },
    { path: '*', element: <Home /> }
  ]);
  const location = useLocation();
  if (!elements) return null;
  return (
    <AnimatePresence mode="wait">
      {React.cloneElement(elements, { key: location.pathname })}
    </AnimatePresence>
  );
};

export default Router;
