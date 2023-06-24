import { configureStore } from '@reduxjs/toolkit';
import navReducer from './slices/nav/nav.slice';
import testimonialReducer from './slices/testimonials/testimonials.slice';

export const store = configureStore({
  reducer: {
    nav: navReducer,
    testimonials: testimonialReducer
  }
});
