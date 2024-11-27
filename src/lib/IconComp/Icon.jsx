import React from 'react';
import icons from './icons';

const Icon = ({ name, size = 24}) => {
  const IconComponent = icons[name];

  return (
    <IconComponent
      width={size}
      height={size}
    />
  );
};

export default Icon;
