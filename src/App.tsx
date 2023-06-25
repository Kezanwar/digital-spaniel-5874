import { useEffect } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@app/types/store';
import { fetchTestimonialsAction } from '@app/store/slices/testimonials/testimonials.actions';

// components
import { Header } from '@app/components/features/Header';

function App() {
  const dispatch: AppDispatch = useDispatch();
  const t = useSelector((state: RootState) => state.testimonials);
  useEffect(() => {
    if (!t.isFetched && !t.testimonials?.length) {
      dispatch(fetchTestimonialsAction);
    }
  }, []);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
