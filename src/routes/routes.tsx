import React from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// guards

// layouts

// pages
import Test from '../pages/Test';

// config

// ----------------------------------------------------------------------

const Router: React.FC = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <Test />
    }
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
