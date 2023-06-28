import Lottie from 'lottie-react';
import React from 'react';
import LoadingAnim from '@app/assets/lottie/loading.json';

const styles = { height: '6rem' };

const LoadingLottie: React.FC = () => {
  return <Lottie style={styles} animationData={LoadingAnim} loop={true} />;
};

export default LoadingLottie;
