import axiosInstance from '../services/axios';
import { Testimonial } from '../types/testimonials';

const ENDPOINTS = {
  getTestimonials: '/testimonials'
};

export const getTestimonials = () => {
  return axiosInstance.get<Testimonial[]>(ENDPOINTS.getTestimonials);
};
