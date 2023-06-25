import { Decorator } from '@storybook/react';

export const ColouredBG: Decorator = (Story) => {
  return (
    <div
      style={{
        backgroundColor: 'gray',
        padding: '2rem',
        borderRadius: '0.5rem'
      }}
    >
      <Story />
    </div>
  );
};
