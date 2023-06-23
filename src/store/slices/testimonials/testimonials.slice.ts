import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Testimonial } from '@app/types/testimonials';

// types

interface testimonialSliceState {
  testimonials: Testimonial[];
  loading: boolean;
  isFetched: boolean;
}

const initialState: testimonialSliceState = {
  testimonials: [],
  loading: false,
  isFetched: false
};

const navSlice = createSlice({
  name: 'navSlice',
  initialState,
  reducers: {
    setTestimonials: (state, action: PayloadAction<Testimonial[]>) => {
      state.testimonials = action.payload;
      state.isFetched = true;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    }
  }
});

// export for use around the app
export const { setTestimonials, setLoading } = navSlice.actions;

// export for store
const navReducer = navSlice.reducer;

export default navReducer;
