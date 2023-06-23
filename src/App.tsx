import { useEffect } from 'react';
import { Root } from './components/Root';
import { getTestimonials } from './api/testimonials.api';
import { Header } from './components/Header';

function App() {
  useEffect(() => {
    getTestimonials().then((res) => console.log(res?.data));
  }, []);
  return (
    <Root>
      <Header />
    </Root>
  );
}

export default App;
