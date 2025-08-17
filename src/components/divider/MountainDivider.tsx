import React from 'react';
import { himalayanRangeImg } from '@/assets/images/images';

const MountainDivider = () => {
  return (
    <div
      className="mountain-divider"
      style={{
        backgroundImage: `url(${himalayanRangeImg})`,
      }}
    />
  );
};

export default MountainDivider;
